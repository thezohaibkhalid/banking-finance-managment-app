export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <h1>Sidebar</h1>
      {children}
    </main>
  );
}
