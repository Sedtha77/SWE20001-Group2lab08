import IconInfo from "@/icons/IconInfo";

export default function ErrorText({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div className="mt-1 flex items-center text-red-500">
      <IconInfo className="w-5 h-5 lg:w-6 lg:h-6" />
      <span className="ml-1 flex-1 block font-medium tracking-wider text-sm lg:text-base">{message}</span>
    </div>
  );
}
