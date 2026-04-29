export default function Footer() {
    return (
        <footer className="relative py-8 px-4 border-t border-border">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm text-text-muted">
                    © {new Date().getFullYear()} Cevat Aydın. Tüm hakları saklıdır.
                </p>
            </div>
        </footer>
    );
}
