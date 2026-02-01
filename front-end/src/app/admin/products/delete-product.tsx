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
import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function DeleteProduct(props: any) {
    const handleSubmit = async () => {
        try {
            await deleteProduct(props.item.id);
            toast.success("Product has been deleted successfully!");
            // props.fetchData(); // re-enable this
        } catch {
            toast.error("Failed to delete product");
        }
    };

    const deleteProduct = async (id: number) => {
        try {
            const { data } = await axios.delete(
                `https://fakestoreapi.com/products/${id}`,
            );
            return data;
        } catch (error) {
            console.error("Error deleting product:", error);
            throw error;
        }
    };

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button className="font-bold bg-red-600 hover:bg-red-700 hover:text-white text-white w-full">
                        {" "}
                        <Trash /> Delete
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-425px">
                    <DialogHeader>
                        <DialogTitle>
                            {" "}
                            Are you sure you want to delete this product?{" "}
                        </DialogTitle>
                        <DialogDescription>
                            Once deleted, the product cannot be restored & will be removed
                            permanently from the list.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button
                                className="bg-red-600 hover:bg-red-700"
                                onClick={handleSubmit}
                                type="button"
                            >
                                Confirm
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
