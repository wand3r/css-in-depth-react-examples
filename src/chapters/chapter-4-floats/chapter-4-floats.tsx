import React, { SFC } from "react";
import { Media, MediaProps } from "./media";
import { mediaData } from "./media-sample-data";
import { splitBy } from "./utils";
import "./chapter-4-floats.scss";
import "./grid-system.scss";

type Chapter4Props = {
  rows: number
  items: MediaProps[]
}

export const Chapter4: SFC<Chapter4Props> = ({
  rows = 3,
  items = [...mediaData, ...mediaData],
}) => (
  <>
    <header>
      <h1>Franklin Running</h1>
    </header>
    <main className="main clearfix">
      <h2>Running tips</h2>
      {splitBy(rows, items).map((mediaInRow) => (
        <div className="row">
          {mediaInRow.map((media) => (
            <div className={`column-${12 / rows}`}>
              <Media {...media} />
            </div>
          ))}
        </div>
      ))}
    </main>
  </>
)
