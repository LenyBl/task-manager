export default function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('fr-FR');
};