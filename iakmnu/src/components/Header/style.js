import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 64px;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral5};
  box-shadow:
    0 0.5px 0 ${({ theme }) => theme.colors.neutral40},
    0px 12px 12px 0px ${({ theme }) => `${theme.colors.neutral80}0D`};
  ${({ theme }) => theme.responsive.mobile`
    z-index: 20;
  `}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ theme }) => theme.responsive.desktop`
      .burger-icon {
        & svg {
          display: none;
        }
      };
      .unifiedLogo-mobile {
        display: none;
      };
  `}

  ${({ theme }) => theme.responsive.desktopLarge`
      .burger-icon {
        & svg {
          display: none;
        }
      };
      .unifiedLogo-mobile {
        display: none;
      };
  `}

  ${({ theme }) => theme.responsive.tablet`
      .burger-icon {
        & svg {
          display: none;
        };
      };
      .unifiedLogo-mobile {
        display: none;
      };
  `}

  ${({ theme }) => theme.responsive.tabletsm`
      .burger-icon {
        & svg {
          display: none;
        };
      };
      .unifiedLogo-mobile {
        display: none;
      };
  `}

  ${({ theme }) => theme.responsive.mobile`
      ${css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: ${theme.spacings.spacing05};

        & .profile {
          display: none;
        }
      `}
  `}
`;

export const HeaderProfileWrapper = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
  cursor: pointer;
`;

export const HeaderProfilePicture = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.blue5};
`;

export const HeaderProfileName = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4px;
`;

export const HeaderProfileIcon = styled.div`
  align-items: center;
  display: flex;
`;

export const ShowProfileDropdown = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.neutral5};
  top: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 12px 12px 0px ${({ theme }) => `${theme.colors.neutral80}0D`};
  text-decoration: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 999;
  & > li {
    cursor: pointer;
    padding: 16px 12px;
    display: flex;
    gap: 8px;
    align-items: center;
    height: 100%;
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue5};
    }
    div {
      display: flex;
      align-items: center;
    }
    &:last-child {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`;

export const HeaderNotificationWrapper = styled.div`
  padding: 22px 20px;
  box-shadow: 0.5px 0 0 #e3e6e9 inset;
`;

export const HeaderNotification = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ShowNotificationWrapper = styled.div`
  position: absolute;
  top: calc(100% + 0.5px);
  right: 18px;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.neutral5};
  border-radius: 0 0 8px 8px;
  ${({ theme }) => theme.responsive.mobile`
    right:0;
    width: 100%;
    `}
`;
