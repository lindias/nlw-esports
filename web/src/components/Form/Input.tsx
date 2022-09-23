import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className="rounded bg-zinc-900 px-4 py-3 text-sm placeholder:text-zinc-500"
    />
  );
}
