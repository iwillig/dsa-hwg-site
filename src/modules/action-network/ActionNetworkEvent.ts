export interface ActionNetworkEvent {
  identifiers:              string[];
  origin_system:            string;
  created_date:             string;
  modified_date:            string;
  start_date:               string;
  title:                    string;
  status:                   string;
  description:              string;
  location:                 Location;
  host_pitch:               string;
  host_instructions:        string;
  browser_url:              string;
  host_url:                 string;
  featured_image_url:       string;
  total_events:             number;
  total_rsvps:              number;
  "action_network:hidden":  boolean;
  "action_network:sponsor": ActionNetworkSponsor;
  _links:                   Links;
}

export interface Location {
  venue:         string;
  address_lines: string[];
  locality:      string;
  region:        string;
  postal_code:   string;
  country:       string;
  location:      LocationClass;
}

export interface LocationClass {
  latitude:  number;
  longitude: number;
  accuracy:  string;
}


export interface Links {
  self:                   ActionNetworkEmbed;
  "osdi:events":          ActionNetworkEmbed;
  "action_network:embed": ActionNetworkEmbed;
  curies:                 Cury[];
}

export interface ActionNetworkEmbed {
  href: string;
}

export interface Cury {
  name:      string;
  href:      string;
  templated: boolean;
}

export interface ActionNetworkSponsor {
  title: string;
  url:   string;
}
