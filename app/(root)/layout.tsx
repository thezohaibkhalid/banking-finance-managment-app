
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <h1 className="bg-blue-800">Sidebar</h1>
      {children}
    </main>
  );
}
