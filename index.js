export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Colossus Core Console
      </h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}>
        <input
          placeholder="Enter command..."
          style={{
            padding: '0.5rem',
            width: '250px',
            border: 'none',
            borderRadius: '4px',
            outline: 'none'
          }}
        />
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#00ff9f',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Execute
        </button>
      </div>
      <pre
        style={{
          backgroundColor: '#111',
          padding: '1rem',
          borderRadius: '4px',
          width: '80%',
          maxWidth: '600px',
          overflow: 'auto'
        }}
      >
        > Awaiting input...
      </pre>
    </main>
  );
}
