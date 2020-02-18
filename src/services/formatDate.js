import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

function formatDate(date) {
  const dateFormatted = date.map(data => {
    const newDate = { ...data };
    newDate.date = format(parseISO(data.date), "EEEE dd 'de' MMMM'", {
      locale: pt,
    });
  });
  return dateFormatted;
}

export default formatDate;
