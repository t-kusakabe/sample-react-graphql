import BooksRow from './BooksRow';

const BooksTable = () => {
  const rows = [
    <BooksRow isbn="001" title="SampleA" />,
    <BooksRow isbn="002" title="SampleB" />,
    <BooksRow isbn="003" title="SampleC" />
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ISBN</th>
          <th>TITLE</th>
        </tr>
      </thead>

      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default BooksTable;
