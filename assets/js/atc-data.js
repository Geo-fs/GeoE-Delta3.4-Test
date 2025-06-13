// assets/js/atc-data.js
// Module to fetch live Geo-FS data for ATC Mode
(function(global) {
  'use strict';

  // Ensure namespace
  global.atc = global.atc || {};

  /**
   * Returns an array of player objects from Geo-FS.
   * Each object typically contains position, heading, callsign, etc.
   */
  atc.getPlayers = function() {
    if (window.geofs && geofs.players && typeof geofs.players.getAll === 'function') {
      return geofs.players.getAll();
    }
    return [];
  };

  /**
   * Returns an array of airport objects from Geo-FS.
   * Each object includes ICAO code, name, latitude, longitude, and other metadata.
   */
  atc.getAirports = function() {
    if (window.geofs && geofs.airports && Array.isArray(geofs.airports.list)) {
      return geofs.airports.list;
    }
    return [];
  };

  /**
   * Returns an array of navaid objects from Geo-FS.
   * Each object includes type (VOR, NDB), frequency, lat/lon, etc.
   */
  atc.getNavaids = function() {
    if (window.geofs && geofs.navaids && Array.isArray(geofs.navaids.list)) {
      return geofs.navaids.list;
    }
    return [];
  };

})(window);
