import { parse } from 'csv-parse';
import fs from 'node:fs';

const csvPath = new URL('./tasks.csv', import.meta.url);

const stream = fs.createReadStream(csvPath);

const parser = parse({
  delimiter: ',',
  skipEmptyLines: true,
  fromLine: 2
});

async function parseTaskFromCSV() {
  const linesParse = stream.pipe(parser);

  for await (const line of linesParse) {
    const [title, description] = line;

    await fetch('http://localhost:3333/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      })
    })
  }

}

parseTaskFromCSV()