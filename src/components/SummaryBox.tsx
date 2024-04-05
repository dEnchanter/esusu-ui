import React from 'react';

interface SummaryBoxProps {
  title: string;
  leftLabel?: string;
  rightLabel?: string;
  value?: string;
  leftValue?: string;
  rightValue?: string;
  leftRatio?: string;
  rightRatio?: string;
  single?: boolean;
}

export function SummaryBox({
  title,
  leftLabel,
  rightLabel,
  value,
  leftValue,
  rightValue,
  leftRatio,
  rightRatio,
  single,
}: SummaryBoxProps): JSX.Element {
  return (
    <div className="w-64 bg-white border border-gray-200 shadow-sm rounded mb-7 flex flex-col items-center text-sm text-gray-700 px-2 py-4">
      <h1 className="text-gray-500 font-medium h-8 overflow-hidden">{title}</h1>
      {single ? (
        <div className="text-2xl font-bold py-5 h-28 overflow-hidden">
          {value}
        </div>
      ) : (
        <>
          <p className="font-bold text-2xl h-8 overflow-hidden">
            {value}
          </p>
          <div className="flex divide-x-2 w-full h-12 overflow-hidden">
            <div className="text-center w-1/2 text-sm">
              <h5 className="text-gray-400 pb-1">{leftLabel}</h5>
              <p className="font-medium">{leftValue}</p>
            </div>
            <div className="text-center w-1/2 text-sm">
              <h5 className="text-gray-400 pb-1">{rightLabel}</h5>
              <p className="font-medium">{rightValue}</p>
            </div>
          </div>
          <div className="w-full h-4 overflow-hidden">
            <span
              style={{ width: leftRatio }}
              className="h-1 bg-green-500 inline-block rounded border-r-4  border-gray-50"
            ></span>
            <span
              style={{ width: rightRatio }}
              className="h-1 bg-red-500 inline-block rounded"
            ></span>
          </div>
          <div className="flex justify-between w-full text-xs h-4 overflow-hidden">
            <div>{leftRatio}</div>
            <div>{rightRatio}</div>
          </div>
        </>
      )}
    </div>
  );
}
