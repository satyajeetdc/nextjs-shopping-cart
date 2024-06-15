"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard({ item }) {
  return (
    <Card>
      <CardContent>
        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="p-5">
          <CardTitle className="text-lg font-bold text-gray-900">
            {item?.title}
          </CardTitle>
          <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
            <p className="text-md font-extrabold text-gray-800">
              ${item?.price}
            </p>
            <div>
              <Button>Details</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
