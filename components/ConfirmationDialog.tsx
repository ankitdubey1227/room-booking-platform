import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ConfirmationDialog({
  title,
  desc,
  buttonName,
  id,
  open,
  setOpen,
  handleClick,
}: ConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] flex-center flex-col gap-4 bg-white dark:bg-dark-3">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-green-600 dark:text-[#46ca83]">
            {title}
          </DialogTitle>
        </DialogHeader>
        {desc && (
          <DialogTitle className="text-base font-semibold text-gray-600 dark:text-dark-1">
            {desc}
          </DialogTitle>
        )}
        <DialogFooter>
          {id && handleClick && (
            <Button
              onClick={() => {
                handleClick(id);
                setOpen(false);
              }}
              type="submit"
            >
              {buttonName}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
