import { useEffect } from "react";
import { Table } from "react-bootstrap";
import "./data.css";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";

const Tables = () => {
  const dispatch = useDispatch();
  const data = useSelector(({ data1 }) => data1);

  useEffect(() => {
    dispatch(allStore.fetchData());
  }, [dispatch]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>No</th>

            <th>Movie Name</th>
            <th>Languange</th>
            <th>Realese Date</th>
            <th>Vote</th>
            <th>Total Vote</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => (
            <tr>
              <td key={index}>{index + 1}</td>
              <td key={index}> {el.original_title}</td>
              <td key={index}> {el.original_language}</td>
              <td key={index}> {el.release_date}</td>
              <td key={index}>{el.vote_average}</td>
              <td key={index}>{el.vote_count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Tables;
