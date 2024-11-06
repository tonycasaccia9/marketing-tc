export const state = {
  data: [],
};

export const addResponse = async function (data) {
  state.data.push(data);
  /*
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyBK7L5IYndhOF7i5AONVK1XU_keI4XfAScPfD2Q7N4VHbZs73qmEcot20iso4SmSMx/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Fetch error:", error);
  }
  */
};
