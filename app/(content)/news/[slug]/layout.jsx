export default function NewsItemPageLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
