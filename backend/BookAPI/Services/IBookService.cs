using BookAPI.Models;

namespace BookAPI.Services
{
    public interface IBookService
    {
        IEnumerable<Book> GetAllBooks();
        Book? GetBook(int id);
        Book AddBook(Book book);
        Book? UpdateBook(Book book);
        void DeleteBook(int id);
    }
}