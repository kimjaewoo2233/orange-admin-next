export function formattedDateForENUS({
    date
}: {
    date: Date
}) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate;
}
