import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type EducationCardProps = {
    title: string;
    place: string;
    image: string;
    date: string;
}

export function EducationCard({
    title,
    place,
    image,
    date,
}: EducationCardProps) {
    return (
        <Card>
            <CardHeader className="p-4 space-y-1">
                <Image
                    src={image}
                    alt="iCEV - Instituto de Ensino Superior"
                    width={40}
                    height={40}
                    className="rounded"
                />
                <CardDescription className="text-xs">
                    {date}
                </CardDescription>
                <CardTitle className="line-clamp-2 h-[33px]">
                    {title}
                </CardTitle>
                <CardDescription>
                   {place}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}