import BooksRow from './BooksRow';

const BooksTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ISBN</th>
          <th>TITLE</th>
        </tr>
      </thead>

      <tbody>
        <BooksRow />
      </tbody>
    </table>
  );
};

export default BooksTable;
