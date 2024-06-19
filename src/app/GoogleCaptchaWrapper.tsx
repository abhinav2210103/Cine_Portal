import React, { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
interface Props {
    children: ReactNode;
}
const GoogleCaptchaWrapper: React.FC<Props> = ({ children }) => {
    const recaptchaKey = "6LduePwpAAAAAPSYw03svKMQfz93zdOgQJl5r6ZN"; // Assuming recaptchaKey is a string

    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}>
            {children}
        </GoogleReCaptchaProvider>
    );
};
export default GoogleCaptchaWrapper;
