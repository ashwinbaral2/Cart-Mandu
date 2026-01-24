import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Edit } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function EditProducts(props: any) {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {id, value} = e.target;
        setFormData((prev)=>({...prev, [id]:value}))
    };

    const handleSubmit = async () => {
        props.editProducts(formData);
        props.fetchdata();
        toast.success("Your changes have been saved!")
    };
    return (
        <Dialog>
            <form >
                <DialogTrigger asChild>
                    <Button className="font-bold bg-zinc-600 hover:bg-zinc-700 hover:text-white text-white  mb-2 w-full"> <Edit/> Edit</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-425px">
                    <DialogHeader>
                        <DialogTitle> Edit Product Details </DialogTitle>
                        <DialogDescription>
                            Edit product details here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="title"> Product Name</Label>
                            <Input id="title" onChange={handleChange} name="title" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="category"> Category of the Product</Label>
                            <Input id="category" onChange={handleChange} name="category" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description"> Description of the Product</Label>
                            <Input id="description" onChange={handleChange} name="description" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="price"> Price of the Product</Label>
                            <Input id="price" onChange={handleChange} name="price" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="image"> Image of the Product</Label>
                            <Input id="image" onChange={handleChange} name="image"/>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button onClick={handleSubmit} type="button">Save</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
