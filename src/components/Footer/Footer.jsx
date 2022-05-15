import { FooterWrap, FooterText, FooterLink } from './Footer.styled';

export function Footer() {
  return (
    <FooterWrap>
      <FooterText>Made with 💛💙 by Yuliia Melnyk</FooterText>
      <FooterLink
        href="https://github.com/Yuliia-dev"
        target="_blank"
        rel="noreferrer noopener"
      >
        {' '}
        My GitHub Link{' '}
      </FooterLink>
    </FooterWrap>
  );
}
