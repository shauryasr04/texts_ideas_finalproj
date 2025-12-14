import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
// Import markercluster - it extends L.MarkerClusterGroup
import 'leaflet.markercluster';
import migrationData from '../data/kashmiri_pandit_migration_points.json';

// Custom marker icons for three categories
const createOriginIcon = () => {
  return L.divIcon({
    className: 'custom-origin-marker',
    html: '<div style="background-color: #0a0a0a; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #0a0a0a;"></div>',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });
};

const createPrimaryCampIcon = () => {
  return L.divIcon({
    className: 'custom-primary-camp-marker',
    html: '<div style="background-color: #4a4a4a; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 0 2px #4a4a4a;"></div>',
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });
};

const createUrbanResettlementIcon = () => {
  return L.divIcon({
    className: 'custom-urban-marker',
    html: '<div style="background-color: #6a6a6a; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 0 2px #6a6a6a;"></div>',
    iconSize: [12, 12],
    iconAnchor: [6, 6]
  });
};

// Component to handle marker clusters
function MarkerClusterLayer({ markers, iconCreator, map, visible }) {
  const clusterRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    if (!visible) {
      if (clusterRef.current) {
        map.removeLayer(clusterRef.current);
        clusterRef.current = null;
      }
      return;
    }

    // Create cluster group
    if (clusterRef.current) {
      map.removeLayer(clusterRef.current);
    }

    // Use L.markerClusterGroup which is added by leaflet.markercluster
    const clusterGroup = L.markerClusterGroup({
      chunkedLoading: true,
      maxClusterRadius: 50
    });

    markers.forEach((point) => {
      const marker = L.marker([point.lat, point.lon], {
        icon: iconCreator()
      });

      marker.bindPopup(`
        <div style="font-family: 'Inter', sans-serif; min-width: 200px;">
          <h3 style="font-weight: 600; font-size: 14px; margin-bottom: 8px; color: #0a0a0a;">${point.name}</h3>
          <p style="font-size: 12px; color: #4a4a4a; margin-bottom: 4px;"><strong>Type:</strong> ${point.type}</p>
          <p style="font-size: 12px; color: #4a4a4a; margin-top: 8px;">${point.note}</p>
        </div>
      `);

      clusterGroup.addLayer(marker);
    });

    map.addLayer(clusterGroup);
    clusterRef.current = clusterGroup;

    return () => {
      if (clusterRef.current) {
        map.removeLayer(clusterRef.current);
        clusterRef.current = null;
      }
    };
  }, [map, markers, iconCreator, visible]);

  return null;
}

// Component to handle flow lines
function FlowLinesLayer({ flowLines, map, visible }) {
  const linesRef = useRef([]);

  useEffect(() => {
    if (!map) return;

    if (!visible) {
      linesRef.current.forEach(line => {
        if (map.hasLayer(line)) {
          map.removeLayer(line);
        }
      });
      linesRef.current = [];
      return;
    }

    // Remove existing lines first
    linesRef.current.forEach(line => {
      if (map.hasLayer(line)) {
        map.removeLayer(line);
      }
    });
    linesRef.current = [];

    // Add new lines
    flowLines.forEach((line) => {
      const polyline = L.polyline(line.positions, {
        color: '#0a0a0a',
        weight: 2,
        opacity: 0.6,
        dashArray: '5, 10'
      });
      map.addLayer(polyline);
      linesRef.current.push(polyline);
    });

    return () => {
      linesRef.current.forEach(line => {
        if (map.hasLayer(line)) {
          map.removeLayer(line);
        }
      });
      linesRef.current = [];
    };
  }, [map, flowLines, visible]);

  return null;
}

// Inner component that has access to map instance
function MapContent({ origins, primaryCamps, urbanResettlements, flowLines, layerStates }) {
  const map = useMap();

  // Invalidate size when map is ready
  useEffect(() => {
    const timer = setTimeout(() => {
      if (map) {
        map.invalidateSize();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [map]);

  return (
    <>
      <MarkerClusterLayer
        markers={origins}
        iconCreator={createOriginIcon}
        map={map}
        visible={layerStates.origins}
      />

      <MarkerClusterLayer
        markers={primaryCamps}
        iconCreator={createPrimaryCampIcon}
        map={map}
        visible={layerStates.primaryCamps}
      />

      <MarkerClusterLayer
        markers={urbanResettlements}
        iconCreator={createUrbanResettlementIcon}
        map={map}
        visible={layerStates.urbanResettlements}
      />

      <FlowLinesLayer
        flowLines={flowLines}
        map={map}
        visible={layerStates.flowLines}
      />
    </>
  );
}

function KashmirMigrationMap() {
  const origins = migrationData.filter(point => point.type === 'Origin');
  const primaryCamps = migrationData.filter(point => point.type === 'Primary Camp');
  const urbanResettlements = migrationData.filter(point => point.type === 'Urban Resettlement');
  
  // Flow lines - from Srinagar to major destinations
  const srinagar = migrationData.find(p => p.name === 'Srinagar');
  const jammuCenter = { lat: 32.7266, lon: 74.8570 }; // Central Jammu area
  const delhiCenter = { lat: 28.6139, lon: 77.2090 }; // Central Delhi area

  const flowLines = [];
  if (srinagar) {
    flowLines.push({
      positions: [[srinagar.lat, srinagar.lon], [jammuCenter.lat, jammuCenter.lon]],
      label: 'Srinagar → Jammu'
    });
    flowLines.push({
      positions: [[srinagar.lat, srinagar.lon], [delhiCenter.lat, delhiCenter.lon]],
      label: 'Srinagar → Delhi'
    });
  }

  const [layerStates, setLayerStates] = useState({
    origins: true,
    primaryCamps: true,
    urbanResettlements: true,
    flowLines: true
  });

  return (
    <div className="w-full">
      <div style={{ height: '70vh', width: '100%', minHeight: '400px' }}>
        <MapContainer
          center={[32.9, 75.6]}
          zoom={6}
          style={{ height: '100%', width: '100%', zIndex: 0 }}
          className="kashmir-map"
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Showing historical locations from 1990'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            className="historical-map-tiles"
          />

          <MapContent
            origins={origins}
            primaryCamps={primaryCamps}
            urbanResettlements={urbanResettlements}
            flowLines={flowLines}
            layerStates={layerStates}
          />
        </MapContainer>
      </div>

      {/* Custom Layer Control */}
      <div className="mt-4 p-4 bg-[#fafafa] border border-[#e5e5e5]">
        <h3 className="text-sm font-semibold text-[#0a0a0a] mb-3 uppercase tracking-wider">Toggle Layers</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={layerStates.origins}
              onChange={(e) => setLayerStates({ ...layerStates, origins: e.target.checked })}
              className="w-4 h-4"
            />
            <span className="text-[#4a4a4a]">Origins (Valley districts) ({origins.length})</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={layerStates.primaryCamps}
              onChange={(e) => setLayerStates({ ...layerStates, primaryCamps: e.target.checked })}
              className="w-4 h-4"
            />
            <span className="text-[#4a4a4a]">Primary Camps & Colonies (Jammu) ({primaryCamps.length})</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={layerStates.urbanResettlements}
              onChange={(e) => setLayerStates({ ...layerStates, urbanResettlements: e.target.checked })}
              className="w-4 h-4"
            />
            <span className="text-[#4a4a4a]">Urban Resettlement Clusters (Delhi) ({urbanResettlements.length})</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={layerStates.flowLines}
              onChange={(e) => setLayerStates({ ...layerStates, flowLines: e.target.checked })}
              className="w-4 h-4"
            />
            <span className="text-[#4a4a4a]">Flow Lines</span>
          </label>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 p-6 bg-[#fafafa] border border-[#e5e5e5]">
        <h3 className="text-lg font-semibold text-[#0a0a0a] mb-4">Legend</h3>
        <div className="flex flex-wrap gap-6 text-sm text-[#4a4a4a]">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-white"></div>
            <span>Origins (Valley districts)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#4a4a4a] border-2 border-white"></div>
            <span>Primary Camps & Colonies (Jammu)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#6a6a6a] border-2 border-white"></div>
            <span>Urban Resettlement Clusters (Delhi)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-[#0a0a0a] opacity-60" style={{ borderTop: '2px dashed #0a0a0a' }}></div>
            <span>Flow Lines</span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 space-y-2">
        <p className="text-xs text-[#6a6a6a] italic leading-relaxed">
          Lines are illustrative; points represent commonly cited concentration areas, not every individual route.
        </p>
      </div>
    </div>
  );
}

export default KashmirMigrationMap;
