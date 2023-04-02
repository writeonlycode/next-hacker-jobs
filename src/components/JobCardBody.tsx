export default function JobCardBody({ text }: { text: string }) {
  if (!text) {
    return <></>;
  }

  return <div className="mb-6" dangerouslySetInnerHTML={{ __html: text }} />;
}
