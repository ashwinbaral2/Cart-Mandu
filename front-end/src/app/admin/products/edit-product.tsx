import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { Edit } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function EditProducts(props: any) {
    const [formData, setFormData] = useState({
        title: props.item.title || "",
        price: props.item.price || "",
        description: props.item.description || "",
        category: props.item.category || "",
        image: props.item.image || "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async () => {
        try {
            await editProducts(props.item.id, formData);
            toast.success("Your changes have been saved!");
            // props.fetchData();
        } catch {
            toast.error("Failed to update product");
        }
    };

    const editProducts = async (id: any, productInfo: any) => {
        try {
            const { data } = await axios.put(
                `https://fakestoreapi.com/products/${id}`,
                productInfo,
            );
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button className="font-bold bg-zinc-600 hover:bg-zinc-700 hover:text-white text-white  mb-2 w-full">
                        {" "}
                        <Edit /> Edit
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-425px">
                    <DialogHeader>
                        <DialogTitle> Edit Product Details </DialogTitle>
                        <DialogDescription>
                            Edit product details here. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="title"> Product Name</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={handleChange}
                                name="title"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="category"> Category of the Product</Label>
                            <Input
                                id="category"
                                value={formData.category}
                                onChange={handleChange}
                                name="category"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description"> Description of the Product</Label>
                            <Input
                                id="description"
                                value={formData.description}
                                onChange={handleChange}
                                name="description"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="price"> Price of the Product</Label>
                            <Input
                                id="price"
                                value={formData.price}
                                onChange={handleChange}
                                name="price"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="image"> Image of the Product</Label>
                            <Input
                                id="image"
                                value={formData.image}
                                onChange={handleChange}
                                name="image"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button onClick={handleSubmit} type="button">
                                Save
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
