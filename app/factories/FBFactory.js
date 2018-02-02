"use strict";

angular.module("SweetApp").factory("FbFactory", ($http, $q) => {

    function getBoards() {
        return $q( (resolve, reject) => {
            $http
            .get(`https://unpinterested-7fd33.firebaseio.com/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
            .then( (boards) => {
                let keys =Object.keys(boards.data);
                keys.forEach(key => {
                    boards.data[key].boardId = key;
                });
                console.log("get boards data", boards);
                let boardsDataArr = Object.values(boards.data);
                resolve(boardsDataArr);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function deleteBoards() {
        return $q( (resolve, reject) => {
            $http
            .delete(``)
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function deletePins(pinId) {
        return $q( (resolve, reject) => {
            $http
            .delete(`https://unpinterested-7fd33.firebaseio.com/pins/${pinId}.json`)
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function addPin(newPin) {
        return $q( (resolve, reject) => {
            $http
            .post(`https://unpinterested-7fd33.firebaseio.com/pins.json`, JSON.stringify(newPin))
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function addBoard(newBoard) {
        return $q( (resolve, reject) => {
            $http
            .post(`https://unpinterested-7fd33.firebaseio.com/boards.json`, JSON.stringify(newBoard))
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function getPins(boardId) {
        return $q( (resolve, reject) => {
            $http
            .get(`https://unpinterested-7fd33.firebaseio.com/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
            .then( (data) => {
                console.log("data", data.data);
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    return { addBoard, getPins, addPin, deletePins, getBoards };

});