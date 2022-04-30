import MEDIA from "@/constant/media";

export default function InputFile({ multiple, type, className, children, onChange, name }) {
  const fileType = {
    [MEDIA.image]: "image/png, image/jpeg",
    [MEDIA.video]: "video/mp4",
  };

  return (
    <div className="w-full space-y-1">
      <input type="file" id={name} accept={fileType[type]} className="hidden" multiple={multiple} onChange={onChange} />
      <label htmlFor={name} className={className}>
        {children}
      </label>
    </div>
  );
}
