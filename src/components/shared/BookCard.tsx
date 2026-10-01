import { IBook } from "@/type/books.type";
import Image from "next/image";
import Link from "next/link";


interface IBookCardProps{
    book:IBook
}
const BookCard = ({ book }: IBookCardProps) => {
    const {
        bookId,
        bookName,
        author,
        image,
        category,
        tags,
        rating,
    } = book;

    return (
        <div className="group overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Book Image */}
            <div className="relative flex h-72 items-center justify-center bg-base-200 p-5">

                {/* Category */}
                <span className="absolute left-4 top-4 z-10 rounded-full bg-base-100 px-3 py-1 text-xs font-semibold shadow-md">
                    {category}
                </span>

                {/* Rating */}
                <span className="absolute right-4 top-4 z-10 rounded-full bg-base-100 px-3 py-1 text-sm font-semibold shadow-md">
                    ⭐ {rating}
                </span>

                <Image
                    src={image}
                    alt={bookName}
                    width={180}
                    height={240}
                    className="h-60 w-auto rounded-lg object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Card Content */}
            <div className="p-5">

                {/* Book Name */}
                <h2 className="line-clamp-1 text-xl font-bold">
                    {bookName}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-base-content/60">
                    by {author}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* View Details */}
                <div className="mt-5">
                    <Link
                        href={`/books/${bookId}`}
                        className="btn btn-primary w-full rounded-xl"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;