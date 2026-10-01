// import Image from "next/image";
import { IBook } from "@/type/books.type";
import BookCard from "../shared/BookCard";

const getBookss = async (): Promise<IBook[]> => {
    const response = await fetch('http://localhost:3000/booksData.json');
    return response.json();
};

const Bookss = async () => {
    const bookData = await getBookss();

    return (
        <section className="container mx-auto my-10 px-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* {bookData.map((book) => (
                    <BookCard
                        key={book.bookId}
                        book={book}
                    />
                ))} */}

                {
                    bookData.map((book,ind)=>{
                        return <BookCard key={ind} book={book} />
                    })
                }
            </div>
        </section>
    );
};

export default Bookss;