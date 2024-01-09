const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      favoritos: [],

      planets: [],

      characters: [],


    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        
        removeFavorite: (index) => {
          const store = getStore();
          const updatedFavorites = store.favoritos.slice(); // Clonar la lista de favoritos
          updatedFavorites.splice(index, 1); // Eliminar el elemento en el índice especificado
          setStore({ favoritos: updatedFavorites });
        },

        //reset the global store
        setStore({ demo: demo });
      },

      updatePlanets: async ()=>{
        const store = getStore()
        const response = await fetch("https://www.swapi.tech/api/planets", {
            method: "GET",
          });
          const data = await response.json();
          console.log(data)
         setStore({...store,planets:data.results}) 
      },


      updateCharacters: async ()=>{
        const store = getStore()
        const response = await fetch("https://www.swapi.tech/api/people", {
        method: "GET",
      });
      const data = await response.json();
      setStore({...store,characters:data.results})

      },

      addFavorite: (favorite) => {
        const store = getStore();
        const storeUpdated = {
          ...store,
          favoritos: [...store.favoritos, favorite],
        };
        setStore(storeUpdated);
      },
    },
  };
};

export default getState;
