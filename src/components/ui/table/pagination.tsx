import styled from "@emotion/styled";
import { Button } from "../button";
import { Select } from "../form/select";
import { DefaultPage, LimitOptions } from "@/config/table";

type Props = {
  page: number;
  limit: number;
  total: number;
  onChangePage: (page: number) => void;
  onChangeLimit?: (limit: number) => void;
};

export const Pagination = ({
  page,
  limit,
  total,
  onChangePage,
  onChangeLimit,
}: Props) => {
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const handlePrev = () => {
    if (page > 1) onChangePage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onChangePage(page + 1);
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = Number(e.target.value);
    onChangeLimit?.(newLimit);
    onChangePage(DefaultPage);
  };

  return (
    <PaginationContainer>
      <Button
        disabled={page === 1}
        onClick={handlePrev}
        style={{ marginBottom: 0 }}
      >
        Prev
      </Button>
      <h6>
        Page {page} of {totalPages}
      </h6>
      <Button
        disabled={page === totalPages}
        onClick={handleNext}
        style={{ marginBottom: 0 }}
      >
        Next
      </Button>
      {onChangeLimit && (
        <Select
          value={limit}
          onChange={handleLimitChange}
          style={{ marginBottom: 0 }}
        >
          {LimitOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt} / page
            </option>
          ))}
        </Select>
      )}
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h6 {
    margin: 0;
  }
`;
