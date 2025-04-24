import FileUploader from "@/components/FileUploader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docsy | Upload Document",
};

function UploadPage() {
  return (
    <div>
      <FileUploader />
    </div>
  );
}
export default UploadPage;
