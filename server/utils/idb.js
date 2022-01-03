export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // open connection to the database
    const request = window.indexedDB.open('trip_tribe', 1);

    // create variables to hold reference to the database, transaction (tx), and object store
    let db, tx, store;

    // if version has changed or first time running
    request.onupgradeneeded = function(e) {
      const db = request.result;

      // create object store for each type of data (storeName) and set "primary" key index to be the `_id` of the data
      db.createObjectStore('trip', { keyPath: '_id' });
    };

    request.onerror = function(e) {
      console.log('There was an error');
    };

    request.onsuccess = function(e) {
      db = request.result;
      // open a transaction, `readWrite` in the chosen store (must match one of the object store names)
      tx = db.transaction(storeName, 'readwrite');
      // save a reference to that object store
      store = tx.objectStore(storeName);

      db.onerror = function(e) {
        console.log('error', e);
      };

      switch (method) {
        // add the trip to indexedDB when logged in or on trip creation/update
        case 'put':
          store.put(object);
          resolve(object);
          break;
        // get the trip from indexedDB if offline or while loading
        case 'get':
          const all = store.getAll();
          all.onsuccess = function() {
            resolve(all.result);
          };
          break;
        // Delete the trip on log-out or user request
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }
      
      tx.oncomplete = function() {
        db.close();
      };
    };
  });
}