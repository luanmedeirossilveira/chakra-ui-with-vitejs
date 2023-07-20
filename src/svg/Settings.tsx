import styled from "@emotion/styled";
import { SVGProps } from "react";

interface SettingsSVGProps extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
}

const SettingsSVG = ({ width, height, ...props }: SettingsSVGProps) => (
  <svg viewBox="0 0 32 32" color="inherit" className="icon" {...props}>
    <path
      fill="#40535b"
      d="m23.265 24.381l.9-.894c4.164.136 4.228-.01 4.411-.438l1.144-2.785l.085-.264l-.093-.231c-.049-.122-.2-.486-2.8-2.965V15.5c3-2.89 2.936-3.038 2.765-3.461l-1.139-2.814c-.171-.422-.236-.587-4.37-.474l-.9-.93a20.166 20.166 0 0 0-.141-4.106l-.116-.263l-2.974-1.3c-.438-.2-.592-.272-3.4 2.786l-1.262-.019c-2.891-3.086-3.028-3.03-3.461-2.855L9.149 3.182c-.433.175-.586.237-.418 4.437l-.893.89c-4.162-.136-4.226.012-4.407.438l-1.146 2.786l-.09.267l.094.232c.049.12.194.48 2.8 2.962v1.3c-3 2.89-2.935 3.038-2.763 3.462l1.138 2.817c.174.431.236.584 4.369.476l.9.935a20.243 20.243 0 0 0 .137 4.1l.116.265l2.993 1.308c.435.182.586.247 3.386-2.8l1.262.016c2.895 3.09 3.043 3.03 3.466 2.859l2.759-1.115c.436-.173.588-.234.413-4.436Zm-11.858-6.524a4.957 4.957 0 1 1 6.488 2.824a5.014 5.014 0 0 1-6.488-2.824Z"
    ></path>
  </svg>
);

const SettingsIconStyled = styled(SettingsSVG)`
  @keyframes settings {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  && {
    margin: 0 auto;
    display: block;
    width: ${({ width }) => (width ? width : "1em")};
    height: ${({ height }) => (height ? height : "1em")};
  }

  && path {
    fill: currentColor;
  }

  &&:hover {
    animation: settings 2s linear infinite;
  }
`;

// icones.js.org - vscode-icons:file-type-light-Settings
export function SettingsIcon({ width, height, color }: SettingsSVGProps = {}) {
  return <SettingsIconStyled width={width} height={height} color={color} />;
}
