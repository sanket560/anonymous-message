import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html dir='ltr'>
      <head>
        <title>Verification Code</title>
        <Font
          fontFamily='Roboto'
          fallbackFontFamily='Verdana'
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTUIKg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle='normal'
        />
      </head>
      <Preview>Here&apos;s your verification code:</Preview>
      <Section>
        <Row>
          <Heading as='h2'>Hello {username},</Heading>
        </Row>
        <Row>
          <text>Thank you for registering.Please use the code to complete registration</text>
        </Row>
        <Row>
          <text>{otp}</text>
        </Row>
      </Section>
    </Html>
  );
}
