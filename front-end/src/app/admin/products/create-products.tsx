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
import { useState } from "react";
import { toast } from "sonner";

export default function CreateProducts(props: any) {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async () => {
        createProducts(formData);
        props.fetchData();
        toast.success("Product created successfully!");
    };

    const createProducts = async (productInfo: any) => {
        try {
            const { data } = await axios.post(
                "https://fakestoreapi.com/products",
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
                    <Button
                        variant="outline"
                        className="font-bold bg-green-600 hover:bg-green-700 hover:text-white text-white  mb-5"
                    >
                        Add Product
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-425px">
                    <DialogHeader>
                        <DialogTitle> Fill New Product Details </DialogTitle>
                        <DialogDescription>
                            Fill new product details here. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="title"> Product Name</Label>
                            <Input
                                id="title"
                                onChange={handleChange}
                                name="title"
                                placeholder="Hawkins Pressure Cooker"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="category"> Category of the Product</Label>
                            <Input
                                id="category"
                                onChange={handleChange}
                                name="category"
                                placeholder="Utensils"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description"> Description of the Product</Label>
                            <Input
                                id="description"
                                onChange={handleChange}
                                name="description"
                                placeholder="Best Cooker Ever... "
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="price"> Price of the Product</Label>
                            <Input
                                id="price"
                                onChange={handleChange}
                                name="price"
                                placeholder="$ 39.75 "
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="image"> Image of the Product</Label>
                            <Input
                                id="image"
                                onChange={handleChange}
                                name="image"
                                placeholder="https://yoursite.com/img"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button onClick={handleSubmit} type="button">
                            Add
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
