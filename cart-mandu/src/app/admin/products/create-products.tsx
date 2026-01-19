
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

export  default function CreateProducts() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline" className="font-bold mb-5">Add New Product</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-425px">
                    <DialogHeader>
                        <DialogTitle> Fill New Product Details </DialogTitle>
                        <DialogDescription>
                            Fill new product details here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="title"> Product Name</Label>
                            <Input id="title" name="title" defaultValue="Hawkins Pressure Cooker" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="category"> Category of the Product</Label>
                            <Input id="category" name="category" defaultValue="Utensils" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description"> Description of the Product</Label>
                            <Input id="description" name="description" defaultValue="Best Cooker Ever... " />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="price"> Price of the Product</Label>
                            <Input id="price" name="price" defaultValue="$ 39.75 " />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="image"> Image of the Product</Label>
                            <Input id="image" name="image" defaultValue="https://yoursite.com/img" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
{/* its component but not added to component section because its not reusable */ }
