/* eslint-disable no-plusplus */
import React, {
  useMemo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { SiteLayerContainer, SiteLayerCanvas } from './style';

function getCurrentFormattedTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const Watermark = ({ isShow, agentName }) => {
  const canvasRef = useRef(null);

  const [currentTimeStamp, setCurrentTimeStamp] = useState(
    getCurrentFormattedTime()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeStamp = getCurrentFormattedTime();
      const currentMinutes = currentTimeStamp.split(':')[1];
      const newMinutes = newTimeStamp.split(':')[1];

      if (currentMinutes !== newMinutes) {
        setCurrentTimeStamp(newTimeStamp);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTimeStamp]);

  const calculateDimensions = useCallback((width) => {
    const maxLogoWidth = 250;
    const logoWidth = Math.min(maxLogoWidth, width * 0.2);
    const agentNameFontSize = Math.min(20, width * 0.02);
    const timestampFontSize = Math.min(14, width * 0.014);

    return { logoWidth, agentNameFontSize, timestampFontSize };
  }, []);

  const drawWatermarkItem = useCallback((ctx, x, y, logo, dimensions, text) => {
    const { logoWidth, logoHeight, agentNameFontSize, timestampFontSize } =
      dimensions;

    ctx.save();
    ctx.translate(x, y);

    ctx.drawImage(logo, -logoWidth / 2, -logoHeight / 2, logoWidth, logoHeight);

    ctx.rotate((-50 * Math.PI) / 180);
    ctx.fillStyle = 'rgba(204, 204, 204, 0.4)';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.shadowBlur = 1;
    ctx.shadowOffsetY = 1;
    ctx.textAlign = 'center';

    const screenWidth = window.innerWidth;
    const padding = screenWidth < 768 ? 20 : 80;

    ctx.font = `600 ${agentNameFontSize}px Poppins`;
    ctx.fillText(text.agentName, 0, logoHeight / 2 - padding);

    ctx.font = `600 ${timestampFontSize}px Poppins`;
    ctx.fillText(
      text.timeStamp,
      0,
      logoHeight / 2 + agentNameFontSize - padding
    );

    ctx.restore();
  }, []);

  const drawWatermark = useMemo(
    () => (ctx, width, height) => {
      const logo = new Image();
      // logo.src = WatermarkLogo;

      logo.onload = () => {
        ctx.save();

        const { logoWidth, agentNameFontSize, timestampFontSize } =
          calculateDimensions(width, height);
        const logoHeight = logoWidth / (logo.width / logo.height);

        const itemWidth = Math.max(
          logoWidth,
          ctx.measureText(agentName).width,
          ctx.measureText(currentTimeStamp).width
        );
        const itemHeight =
          logoHeight + agentNameFontSize + timestampFontSize + 20;

        const spacing = {
          horizontal: itemWidth * 1.5,
          vertical: itemHeight * 1.5,
        };
        const repetitions = Math.ceil(
          (Math.sqrt(width * width + height * height) * 2) /
            Math.min(spacing.horizontal, spacing.vertical)
        );

        const dimensions = {
          logoWidth,
          logoHeight,
          agentNameFontSize,
          timestampFontSize,
        };
        const text = { agentName, timeStamp: currentTimeStamp };

        for (let i = -repetitions; i < repetitions; i++) {
          for (let j = -repetitions; j < repetitions; j++) {
            const x = i * spacing.horizontal + width / 2;
            const y = j * spacing.vertical + height / 2;

            drawWatermarkItem(ctx, x, y, logo, dimensions, text);
          }
        }

        ctx.restore();
      };
    },
    [agentName, currentTimeStamp, calculateDimensions, drawWatermarkItem]
  );

  const handleDraw = useCallback(() => {
    if (!isShow || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas.getBoundingClientRect();

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    drawWatermark(ctx, width, height);
  }, [isShow, drawWatermark]);

  useEffect(() => {
    handleDraw();
  }, [currentTimeStamp, handleDraw]);

  useEffect(() => {
    window.addEventListener('resize', handleDraw);
    return () => window.removeEventListener('resize', handleDraw);
  }, [handleDraw]);

  if (!isShow) return null;

  return (
    <SiteLayerContainer isShow={isShow}>
      <SiteLayerCanvas ref={canvasRef} />
    </SiteLayerContainer>
  );
};

Watermark.propTypes = {
  isShow: PropTypes.bool,
  agentName: PropTypes.string,
};

Watermark.defaultProps = {
  isShow: false,
  agentName: '',
};

export default Watermark;
