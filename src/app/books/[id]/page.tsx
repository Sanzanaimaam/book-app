import { IBook } from "@/type/books.type";
 
const getBookss = async (): Promise<IBook[]> => {
    const response = await fetch('http://localhost:3000/booksData.json');
    return response.json();
};
 
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
 
    const books = await getBookss();
 
    const book = books.find((book) => book.bookId === Number(id));
    if (!book) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center text-lg text-base-content/60">
                Book not found
            </div>
        );
    }
 
    const {
        bookName,
        author,
        image,
        category,
        tags,
        rating,
        review,
        publisher,
        yearOfPublishing,
        totalPages
    } = book;
 
    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <div className="overflow-hidden rounded-3xl border border-base-content/10 bg-base-100 shadow-xl md:grid md:grid-cols-5">
 
                {/* Cover side */}
                <div className="flex items-center justify-center bg-base-100 p-10 md:col-span-2">
                    <img
                        src={image}
                        alt={bookName}
                        className="w-56 rounded-r-xl rounded-l-sm shadow-2xl shadow-black/40 md:w-64"
                    />
                </div>
 
                {/* Info side */}
                <div className="flex flex-col p-8 md:col-span-3 md:p-10">
 
                    {/* Category + rating */}
                    <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {category}
                        </span>
                        <span className="flex items-center gap-1 text-sm font-semibold">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-warning" aria-hidden="true">
                                <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                            </svg>
                            {rating}
                        </span>
                    </div>
 
                    {/* Title + author */}
                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                        {bookName}
                    </h2>
                    <p className="mt-1 text-base text-base-content/60">
                        {author}
                    </p>
 
                    {/* Review */}
                    <p className="mt-6 border-l-2 border-primary/40 pl-4 leading-relaxed text-base-content/75">
                        {review}
                    </p>
 
                    {/* Quick facts */}
                    <div className="mt-6 grid grid-cols-3 divide-x divide-base-content/10 rounded-2xl bg-base-200/60 py-4 text-center">
                        <div className="px-2">
                            <p className="text-xs text-base-content/50">Publisher</p>
                            <p className="mt-1 text-sm font-semibold">{publisher}</p>
                        </div>
                        <div className="px-2">
                            <p className="text-xs text-base-content/50">Year</p>
                            <p className="mt-1 text-sm font-semibold">{yearOfPublishing}</p>
                        </div>
                        <div className="px-2">
                            <p className="text-xs text-base-content/50">Pages</p>
                            <p className="mt-1 text-sm font-semibold">{totalPages}</p>
                        </div>
                    </div>
 
                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md bg-base-200 px-2.5 py-1 text-xs font-medium text-base-content/70"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
 
                    {/* Actions */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button className="btn btn-outline flex-1 rounded-xl">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            Wishlist
                        </button>
                        <button className="btn btn-primary flex-1 rounded-xl border-0 shadow-md">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.04C10.3 4.6 8.1 3.75 5.75 3.75c-1.05 0-2.06.17-3 .48v14.25c.94-.31 1.95-.48 3-.48 2.35 0 4.55.85 6.25 2.29m0-14.25c1.7-1.44 3.9-2.29 6.25-2.29 1.05 0 2.06.17 3 .48v14.25c-.94-.31-1.95-.48-3-.48-2.35 0-4.55.85-6.25 2.29m0-14.25v14.25" />
                            </svg>
                            Read
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Page;