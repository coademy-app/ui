import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query"; // Update the import path if necessary
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const DrawerDialog = ({ triggerButton, triggerButtonText }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const TriggerButton = triggerButton || (
    <Button variant="outline">{triggerButtonText || "Edit Profile"}</Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{TriggerButton}</DialogTrigger>
        <DialogContent className="max-w-[100%] w-[90%]">
          <DialogHeader>
            <DialogTitle>About Web Development Course</DialogTitle>
            <DialogDescription>
              Learn more about this course in depth
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{TriggerButton}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4 flex-col" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const ProfileForm = ({ className }) => {
  return (
    <form className={cn("flex flex-row items-start gap-4 p-4 md:p-6 bg-white shadow-lg rounded-lg", className)} style={{ maxHeight: '80vh', overflowY: 'auto' }}>
    <div className="relative overflow-hidden rounded-lg">
      <img
        src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="course image"
        className="w-full h-auto rounded-lg"
      />
    </div>
    <div className="flex flex-col justify-start py-4 w-full">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Web Development 2024</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatum a quis voluptatem vero odio autem ratione tempora tempore. Itaque aliquid consequatur quis perferendis inventore cupiditate expedita neque quos nemo!
      </p>
      <Button variant="default" className="self-start">
        Register Now
      </Button>
    </div>
  </form>
  );
};

export default DrawerDialog;
