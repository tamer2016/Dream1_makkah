import { useState } from 'react';
import { uploadFile } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface FileUploadProps {
  onUploadComplete?: (url: string) => void;
  allowedTypes?: string[];
  maxSizeMB?: number;
}

export const FileUpload = ({
  onUploadComplete,
  allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'],
  maxSizeMB = 5
}: FileUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // التحقق من نوع الملف
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "خطأ في تحميل الملف",
        description: "نوع الملف غير مسموح به",
        variant: "destructive"
      });
      return;
    }

    // التحقق من حجم الملف
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      toast({
        title: "خطأ في تحميل الملف",
        description: `حجم الملف يجب أن يكون أقل من ${maxSizeMB} ميجابايت`,
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    try {
      const path = `uploads/${Date.now()}_${file.name}`;
      const url = await uploadFile(file, path);
      toast({
        title: "تم التحميل بنجاح",
        description: "تم تحميل الملف بنجاح"
      });
      onUploadComplete?.(url);
    } catch (error) {
      toast({
        title: "خطأ في تحميل الملف",
        description: "حدث خطأ أثناء تحميل الملف",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="file"
        onChange={handleFileChange}
        accept={allowedTypes.join(',')}
        className="hidden"
        id="file-upload"
        disabled={isUploading}
      />
      <label htmlFor="file-upload">
        <Button
          variant="outline"
          className="w-full"
          disabled={isUploading}
          asChild
        >
          <span>
            {isUploading ? 'جاري التحميل...' : 'اختر ملفاً للتحميل'}
          </span>
        </Button>
      </label>
      <p className="text-sm text-muted-foreground text-center">
        الملفات المسموح بها: PDF، JPEG، PNG
        <br />
        الحد الأقصى للحجم: {maxSizeMB} ميجابايت
      </p>
    </div>
  );
};