import type { ChangeEvent } from "react";

import type { BirdObservationFormState } from "@/lib/assistant-types";

export function BirdPhotoUploader({
  form,
  onImageChange,
}: {
  form: BirdObservationFormState;
  onImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="rounded-[30px] border border-moss-100 bg-moss-50/60 p-5">
      <label className="flex min-h-[320px] cursor-pointer flex-col items-center justify-center rounded-[28px] border border-dashed border-moss-300 bg-white p-5 text-center transition hover:border-moss-400">
        {form.imagePreview ? (
          <div className="w-full space-y-3">
            <img
              src={form.imagePreview}
              alt="上傳的鳥類預覽"
              className="h-[280px] w-full rounded-[24px] bg-moss-50 object-contain"
            />
            <p className="text-sm leading-7 text-moss-600">{form.imageName}</p>
            <p className="text-xs leading-6 text-moss-500">
              已完成照片預覽。系統會先分析照片主色並自動勾選建議色塊，你仍可以手動修改。
            </p>
          </div>
        ) : (
          <div className="max-w-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-sky text-3xl">
              🪶
            </div>
            <p className="mt-4 text-xl font-bold text-pine">上傳一張鳥類照片</p>
            <p className="mt-3 text-sm leading-7 text-moss-600">
              先讓系統看照片本身，再自動抓鳥體主色做預設色塊；若照片模糊、背光或主體太小，系統會保守建議。
            </p>
          </div>
        )}
        <input type="file" accept="image/*" className="sr-only" onChange={onImageChange} />
      </label>
    </div>
  );
}
