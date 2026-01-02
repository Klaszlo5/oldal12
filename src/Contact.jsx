export default function Contact() {
  return (
    <>
      <h1>Kapcsolat oldal</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Írd be a neved"
          onChange={(e) => console.log(e.target.value)}
        />

        <button>Küldés</button>
      </form>
    </>
  );
}