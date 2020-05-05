// To parse this data:
//
//   import { Convert, Spec } from "./file";
//
//   const spec = Convert.toSpec(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Spec {
  swagger?: string;
  info?: Info;
  host?: string;
  schemes?: string[];
  tags?: Tag[];
  paths?: Paths;
  definitions?: Definitions;
  commons?: Commons;
}

export interface Commons {
  Headers?: Headers;
}

export interface Headers {
  'Country-Package'?: CountryPackage;
  'Country-Package-Version'?: CountryPackage;
}

export interface CountryPackage {
  description?: string;
  type?: CountryPackageType;
}

export enum CountryPackageType {
  Any = 'any',
  Boolean = 'boolean',
  Integer = 'integer',
  Number = 'number',
  Object = 'object',
  String = 'string',
}

export interface Definitions {
  Parameter?: Parameter;
  Parameters?: Parameters;
  Variable?: Variable;
  Variables?: Parameters;
  Formula?: Formula;
  Brackets?: Brackets;
  Values?: Brackets;
  Entities?: Entities;
  Roles?: RolesClass;
  SituationInput?: SituationPut;
  SituationOutput?: SituationPut;
  Trace?: Trace;
  Building?: Building;
  Organisation?: Organisation;
  Family?: Family;
  Person?: Person;
}

export interface Brackets {
  type?: CountryPackageType;
  additionalProperties?: AdditionalProperties;
}

export interface AdditionalProperties {
  type?: CountryPackageType;
  format?: string;
}

export interface Building {
  type?: CountryPackageType;
  properties?: BuildingProperties;
  additionalProperties?: boolean;
}

export interface BuildingProperties {
  representatives?: Others;
  others?: Others;
  number_of_certificates?: Cdd15;
  actual_GHG_KG_CO2?: Cdd15;
  actual_GHG_KG_CO2_elec?: Cdd15;
  actual_GHG_KG_CO2_gas?: Cdd15;
  actual_GHG_per_apartment?: Cdd15;
  apartment_has_gym?: Cdd15;
  apartments_benchmark?: Cdd15;
  apartments_elec_usage?: Cdd15;
  apartments_gas_kWh_usage?: Cdd15;
  apartments_gas_usage?: Cdd15;
  apartments_not_air_con_serviced?: Cdd15;
  apartments_postcode?: Cdd15;
  apartments_total_kWh_usage?: Cdd15;
  car_park?: Cdd15;
  central_AC?: Cdd15;
  condenser_water?: Cdd15;
  elec_perc_kWh_usage?: Cdd15;
  emissions_ratio?: Cdd15;
  gym_input_status?: BuildingTypeStatus;
  input_number_of_mechanically_ventilated_parking_spaces?: Cdd15;
  input_number_of_naturally_ventilated_parking_spaces?: Cdd15;
  interceptor?: Cdd15;
  lifts?: Cdd15;
  number_of_apartments?: Cdd15;
  number_of_central_ac_apartments?: Cdd15;
  number_of_condenser_water_serviced_apartments?: Cdd15;
  number_of_lift_serviced_apartments?: Cdd15;
  number_of_mechanically_ventilated_parking_spaces?: Cdd15;
  number_of_naturally_ventilated_parking_spaces?: Cdd15;
  pool_input_status?: BuildingTypeStatus;
  pool_parameter_coefficient?: Cdd15;
  pool_status?: Cdd15;
  predicted_electricity_kWh?: Cdd15;
  predicted_energy_emissions?: Cdd15;
  predicted_gas_MJ?: Cdd15;
  building_type?: Cdd15;
  building_type_status?: BuildingTypeStatus;
  is_apartment_building?: Cdd15;
  is_data_centre?: Cdd15;
  is_hospital?: Cdd15;
  is_hotel?: Cdd15;
  is_office?: Cdd15;
  is_shopping_centre?: Cdd15;
  postcode?: Cdd15;
  all_on_site_sources_identified?: Cdd15;
  unaccounted_elec_metered_and_recorded?: Cdd15;
  ESC_creation_date?: Cdd15;
  NABERS_eligible_to_create_ESCs?: Cdd15;
  additional_energy_savings_created?: Cdd15;
  current_NABERS_star_rating?: Cdd15;
  energy_saver?: Cdd15;
  energy_savings_date?: Cdd15;
  first_nabers_rating?: Cdd15;
  historical_baseline_more_than_7_years?: Cdd15;
  historical_baseline_no_more_than_7_years_before_current_rating?: Cdd15;
  historical_baseline_rating_meets_similar_configuration_criteria?: Cdd15;
  implementation_date?: Cdd15;
  includes_GreenPower?: Cdd15;
  is_current_NABERS_rating?: Cdd15;
  meets_minimum_star_rating_requirement?: Cdd15;
  nabers_value_lower_than_previous_historical_NABERS_value?: Cdd15;
  nabers_value_previously_used_to_set_historical_NABERS_rating?: Cdd15;
  previous_annual_creation_occurred?: Cdd15;
  rating_not_obt_for_legal_requirement?: Cdd15;
  star_rating_exceeds_method_one_benchmark_rating?: Cdd15;
  star_rating_exceeds_method_two_benchmark_rating?: Cdd15;
  time_between_current_ratings_and_ESC_date_within_range?: Cdd15;
  uses_NABERS_ratings_tool?: Cdd15;
  measured_electricity_consumption?: Cdd15;
  measured_gas_consumption?: Cdd15;
  nabers_electricity?: Cdd15;
  nabers_gas?: Cdd15;
  onsite_unaccounted_electricity?: Cdd15;
  input_years_of_forward_creation?: BuildingTypeStatus;
  total_forward_created_electricity_savings?: Cdd15;
  total_forward_created_gas_savings?: Cdd15;
  year_one_forward_created_electricity_savings?: Cdd15;
  year_one_forward_created_gas_savings?: Cdd15;
  year_three_forward_created_electricity_savings?: Cdd15;
  year_three_forward_created_gas_savings?: Cdd15;
  year_two_forward_created_electricity_savings?: Cdd15;
  year_two_forward_created_gas_savings?: Cdd15;
  years_of_forward_creation?: Cdd15;
  NRYi1?: Cdd15;
  annually_created_electricity_savings?: Cdd15;
  annually_created_gas_savings?: Cdd15;
  counted_elec_savings?: Cdd15;
  counted_energy_savings?: Cdd15;
  counted_gas_savings?: Cdd15;
  electricity_savings_previous_year?: Cdd15;
  gas_savings_previous_year?: Cdd15;
  regional_network_factor?: Cdd15;
  apartments_benchmark_elec_consumption?: Cdd15;
  apartments_benchmark_gas_consumption_MJ?: Cdd15;
  benchmark_elec_consumption?: Cdd15;
  benchmark_elec_consumption_MWh?: Cdd15;
  benchmark_gas_consumption_MJ?: Cdd15;
  benchmark_gas_consumption_MWh?: Cdd15;
  electricity_savings?: Cdd15;
  energy_savings_type?: BuildingTypeStatus;
  gas_savings?: Cdd15;
  hours_per_week_with_20_percent_occupancy?: Cdd15;
  net_lettable_area?: Cdd15;
  offices_benchmark_elec_consumption?: Cdd15;
  offices_benchmark_gas_consumption_MJ?: Cdd15;
  ESC_cur_diff_as_months?: Cdd15;
  age_of_historical_rating?: Cdd15;
  baseline_rating_year?: Cdd15;
  benchmark_nabers_rating?: Cdd15;
  built_after_nov_2006?: Cdd15;
  current_historical_date_distance?: Cdd15;
  current_rating_period_length?: Cdd15;
  current_rating_year?: Cdd15;
  end_date_of_current_nabers_rating_period?: Cdd15;
  end_date_of_current_rating_year?: Cdd15;
  end_date_of_historical_nabers_rating_period?: Cdd15;
  historical_NABERS_star_rating?: Cdd15;
  historical_rating_period_length?: Cdd15;
  method_one?: Cdd15;
  method_one_can_be_used?: Cdd15;
  method_two?: Cdd15;
  previous_forward_creation_occurred?: Cdd15;
  previous_historical_baseline_rating?: Cdd15;
  start_date_of_current_nabers_rating_period?: Cdd15;
  start_date_of_historical_nabers_rating_period?: Cdd15;
  time_between_historical_and_current_ratings_within_range?: Cdd15;
  today_date?: Cdd15;
  coal_KG_to_KWh?: Cdd15;
  coal_in_KG?: Cdd15;
  diesel_in_litres?: Cdd15;
  diesel_litres_to_KWh?: Cdd15;
  gas_MJ_to_KWh?: Cdd15;
  gas_in_MJ?: Cdd15;
  benchmark_star_rating?: Cdd15;
  building_state_location?: Cdd15;
  coal_kWh?: Cdd15;
  diesel_kWh?: Cdd15;
  elec_kWh?: Cdd15;
  gas_kWh?: Cdd15;
  number_of_computers?: Cdd15;
  offices_benchmark_star_rating?: Cdd15;
  perc_coal_kwh?: Cdd15;
  perc_diesel_kwh?: Cdd15;
  perc_elec_kwh?: Cdd15;
  perc_gas_kwh?: Cdd15;
  rating_type?: Cdd15;
  rating_type_status?: BuildingTypeStatus;
  total_energy_kwh?: Cdd15;
  CDD_15?: Cdd15;
  Dequip?: Cdd15;
  GEClimcorr_tenancy?: Cdd15;
  GE_25_percent_reduction?: Cdd15;
  GE_50_percent_reduction?: Cdd15;
  GE_5star_original_rating?: Cdd15;
  GEclimcorr?: Cdd15;
  GEwholemax?: Cdd15;
  HDD_18?: Cdd15;
  NGE_5star_original_rating?: Cdd15;
  NGEmax?: Cdd15;
  SGE_tenancy?: Cdd15;
  SGEcoal?: Cdd15;
  SGEelec?: Cdd15;
  SGEgas?: Cdd15;
  SGEoil?: Cdd15;
  SGEtenancy?: Cdd15;
  base_building_GEmax?: Cdd15;
  climate_zone?: Cdd15;
  coefficient_A?: Cdd15;
  coefficient_B?: Cdd15;
  f_base_building?: Cdd15;
  f_tenancy?: Cdd15;
  maximum_nabers_adjusted_hours?: Cdd15;
  nabers_adjusted_hours?: Cdd15;
  office_maximum_electricity_consumption?: Cdd15;
  office_maximum_gas_consumption?: Cdd15;
  tenancy_GEmax?: Cdd15;
  term_1?: Cdd15;
  term_2?: Cdd15;
  term_3?: Cdd15;
  term_4?: Cdd15;
  term_5?: Cdd15;
}

export interface Cdd15 {
  type?: CountryPackageType;
  additionalProperties?: Description;
}

export interface Description {
  type?: CountryPackageType;
}

export interface BuildingTypeStatus {
  type?: CountryPackageType;
  additionalProperties?: DefinitionPeriod;
}

export interface DefinitionPeriod {
  type?: CountryPackageType;
  enum?: string[];
}

export interface Others {
  type?: OthersType;
  items?: Description;
}

export enum OthersType {
  Array = 'array',
}

export interface Entities {
  type?: CountryPackageType;
  properties?: EntitiesProperties;
}

export interface EntitiesProperties {
  description?: Description;
  documentation?: Description;
  plural?: Description;
  roles?: Roles;
}

export interface Roles {
  type?: CountryPackageType;
  additionalProperties?: Values;
}

export interface Values {
  $ref?: string;
}

export interface Family {
  type?: CountryPackageType;
  properties?: FamilyProperties;
  additionalProperties?: boolean;
}

export interface FamilyProperties {
  parents?: Others;
  children?: Others;
  others?: Others;
  active_kids__family_has_children_eligible?: Cdd15;
  creative_kids__family_has_children_eligible?: Cdd15;
}

export interface Formula {
  type?: CountryPackageType;
  properties?: FormulaProperties;
}

export interface FormulaProperties {
  content?: Description;
  source?: Description;
}

export interface Organisation {
  type?: CountryPackageType;
  properties?: OrganisationProperties;
  additionalProperties?: boolean;
}

export interface OrganisationProperties {
  representatives?: Others;
  others?: Others;
  art_union__game_meets_criteria?: Cdd15;
  duration_of_authority?: Cdd15;
  fixed_component_fee_in_units?: Cdd15;
  processing_component_fee_in_units?: Cdd15;
  total_fee_in_dollars?: Cdd15;
  total_fee_in_units?: Cdd15;
  draw_lottery__game_meets_criteria?: Cdd15;
  free_lottery__game_meets_criteria?: Cdd15;
  gaming_activity_is_art_union_gaming?: Cdd15;
  gaming_activity_is_charity_housie?: Cdd15;
  gaming_activity_is_club_bingo?: Cdd15;
  gaming_activity_is_draw_lottery?: Cdd15;
  gaming_activity_is_free_lottery?: Cdd15;
  gaming_activity_is_free_to_enter?: Cdd15;
  gaming_activity_is_mini_numbers_lottery?: Cdd15;
  gaming_activity_is_no_draw_lottery?: Cdd15;
  gaming_activity_is_progressive_lottery?: Cdd15;
  gaming_activity_is_promotional_raffle?: Cdd15;
  gaming_activity_is_social_housie?: Cdd15;
  gaming_activity_is_sweep_calcutta?: Cdd15;
  gaming_activity_is_trade_promotion?: Cdd15;
  gaming_activity_other_for_charitable_purposes?: Cdd15;
  gaming_activity_solely_for_social_purposes?: Cdd15;
  gaming_activity_solely_or_partly_for_fundraising?: Cdd15;
  charity_housie__game_meets_criteria?: Cdd15;
  club_bingo__game_meets_criteria?: Cdd15;
  condition_for_multiple_gaming_activities?: Cdd15;
  condition_for_no_individual_prize?: Cdd15;
  social_housie__game_meets_criteria?: Cdd15;
  mini_numbers_lottery__game_meets_criteria?: Cdd15;
  no_draw_lottery__game_meets_criteria?: Cdd15;
  is_art_union?: Cdd15;
  is_charity?: Cdd15;
  is_for_profit_business?: Cdd15;
  is_greyhound_racing_club?: Cdd15;
  is_harness_racing_club?: Cdd15;
  is_not_for_profit?: Cdd15;
  is_political_party?: Cdd15;
  is_racing_club?: Cdd15;
  is_registered_club?: Cdd15;
  is_trade_union?: Cdd15;
  housie_lottery_sweep_or_other?: Cdd15;
  other_gaming_activity__game_meets_criteria?: Cdd15;
  has_authority?: Cdd15;
  gross_proceeds_from_gaming_activity?: Cdd15;
  highest_value_of_individual_prize_in_gaming_activity?: Cdd15;
  is_another_gaming_activity_happening?: Cdd15;
  money_payable_as_separate_prize?: Cdd15;
  net_proceeds_returned_to_participants?: Cdd15;
  no_fee_charged_for_conducting_game?: Cdd15;
  no_individual_prize?: Cdd15;
  no_prize_consists_of_money?: Cdd15;
  participation_is_free?: Cdd15;
  proceeds_to_benefitting_organisation?: Cdd15;
  proceeds_used_for_meeting_cost_of_prizes?: Cdd15;
  total_expenses_for_conducting_gaming_activity?: Cdd15;
  total_prize_value_from_single_gaming_session?: Cdd15;
  total_prize_value_of_all_prizes_from_gaming_activity?: Cdd15;
  total_prize_value_of_all_prizes_from_single_gaming_session?: Cdd15;
  value_of_bonus_prize?: Cdd15;
  value_of_individual_prize?: Cdd15;
  value_of_jackpot_prize?: Cdd15;
  condition_for_exceeding_total_prize_value?: Cdd15;
  progressive_lottery__game_meets_criteria?: Cdd15;
  gaming_activity_organised_for_patronage?: Cdd15;
  gaming_activity_session_duration?: Cdd15;
  prize_paid_between_specific_timings?: Cdd15;
  promotional_raffle__game_meets_criteria?: Cdd15;
  more_than_ten_tickets_sold_to_same_player?: Cdd15;
  number_of_tickets?: Cdd15;
  ticket_cost?: Cdd15;
  condition_for_exceeding_total_prize_value_for_trade_promotion?: Cdd15;
  gaming_activity_has_business_principal_consent?: Cdd15;
  participation_obtained_by_purchasing_goods?: Cdd15;
  trade_promotion__game_meets_criteria?: Cdd15;
  venue_is_licensed_premises?: Cdd15;
  venue_is_registered_club?: Cdd15;
}

export interface Parameter {
  type?: CountryPackageType;
  properties?: ParameterProperties;
  example?: ParameterExample;
}

export interface ParameterExample {
  description?: null;
  id?: string;
  metadata?: Metadata;
  source?: string;
  subparams?: Metadata;
}

export interface Metadata {
}

export interface ParameterProperties {
  values?: Values;
  brackets?: Roles;
  subparams?: Subparams;
  metadata?: Description;
  description?: Description;
  id?: AdditionalProperties;
  source?: Description;
}

export interface Subparams {
  type?: CountryPackageType;
  additionalProperties?: SubparamsAdditionalProperties;
}

export interface SubparamsAdditionalProperties {
  type?: CountryPackageType;
  properties?: PurpleProperties;
}

export interface PurpleProperties {
  definition?: Description;
}

export interface Parameters {
  type?: CountryPackageType;
  additionalProperties?: ParametersAdditionalProperties;
}

export interface ParametersAdditionalProperties {
  type?: CountryPackageType;
  properties?: FluffyProperties;
}

export interface FluffyProperties {
  description?: Description;
  href?: Description;
}

export interface Person {
  type?: CountryPackageType;
  properties?: { [key: string]: Cdd15 };
  additionalProperties?: boolean;
}

export interface RolesClass {
  type?: CountryPackageType;
  properties?: RolesProperties;
}

export interface RolesProperties {
  description?: Description;
  max?: Description;
  plural?: Description;
}

export interface SituationPut {
  type?: CountryPackageType;
  additionalProperties?: boolean;
  properties?: SituationInputProperties;
  example?: string;
}

export interface SituationInputProperties {
  buildings?: Roles;
  organisations?: Roles;
  families?: Roles;
  persons?: Roles;
}

export interface Trace {
  type?: CountryPackageType;
  properties?: TraceProperties;
  example?: string;
}

export interface TraceProperties {
  requestedCalculations?: Others;
  entitiesDescription?: EntitiesDescription;
  trace?: TraceClass;
}

export interface EntitiesDescription {
  type?: CountryPackageType;
  properties?: EntitiesDescriptionProperties;
}

export interface EntitiesDescriptionProperties {
  buildings?: Others;
  organisations?: Others;
  families?: Others;
  persons?: Others;
}

export interface TraceClass {
  type?: CountryPackageType;
  additionalProperties?: TraceAdditionalProperties;
}

export interface TraceAdditionalProperties {
  type?: CountryPackageType;
  properties?: TentacledProperties;
}

export interface TentacledProperties {
  value?: Others;
  dependencies?: Others;
  parameters?: Cdd15;
}

export interface Variable {
  type?: CountryPackageType;
  properties?: VariableProperties;
  example?: VariableExample;
}

export interface VariableExample {
  id?: string;
  description?: string;
  valueType?: string;
  defaultValue?: number;
  definitionPeriod?: string;
  entity?: string;
  source?: string;
  formulas?: Formulas;
}

export interface Formulas {
  '0001-01-01'?: The00010101;
}

export interface The00010101 {
  source?: string;
  content?: string;
}

export interface VariableProperties {
  defaultValue?: Description;
  definitionPeriod?: DefinitionPeriod;
  description?: Description;
  entity?: Description;
  formulas?: Roles;
  id?: Description;
  reference?: Others;
  source?: Description;
  valueType?: DefinitionPeriod;
}

export interface Info {
  title?: string;
  description?: string;
  version?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
}

export interface Contact {
  email?: string;
}

export interface License {
  name?: string;
  url?: string;
}

export interface Paths {
  '/calculate'?: Calculate;
  '/parameters'?: EntitiesClass;
  '/parameter/{parameterID}'?: ID;
  '/variables'?: EntitiesClass;
  '/variable/{variableID}'?: ID;
  '/entities'?: EntitiesClass;
  '/trace'?: Calculate;
  '/spec'?: SpecClass;
}

export interface Calculate {
  post?: Post;
}

export interface Post {
  summary?: string;
  tags?: string[];
  operationId?: string;
  consumes?: string[];
  produces?: string[];
  parameters?: ParameterElement[];
  responses?: { [key: string]: Response };
}

export interface ParameterElement {
  in?: string;
  name?: string;
  description?: string;
  required?: boolean;
  schema?: Values;
  type?: CountryPackageType;
}

export interface Response {
  description?: string;
  headers?: Values;
  schema?: Values;
}

export interface EntitiesClass {
  get?: EntitiesGet;
}

export interface EntitiesGet {
  tags?: string[];
  summary?: string;
  operationId?: string;
  produces?: string[];
  responses?: PurpleResponses;
}

export interface PurpleResponses {
  '200'?: Response;
}

export interface ID {
  get?: ParameterParameterIDGet;
}

export interface ParameterParameterIDGet {
  tags?: string[];
  summary?: string;
  operationId?: string;
  produces?: string[];
  parameters?: ParameterElement[];
  responses?: { [key: string]: Response };
}

export interface SpecClass {
  get?: SpecGet;
}

export interface SpecGet {
  summary?: string;
  tags?: string[];
  operationId?: string;
  produces?: string[];
  responses?: FluffyResponses;
}

export interface FluffyResponses {
  '200'?: The200;
}

export interface The200 {
  description?: string;
  headers?: Values;
}

export interface Tag {
  name?: string;
  description?: string;
  externalDocs?: ExternalDocs;
}

export interface ExternalDocs {
  description?: string;
  url?: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toSpec(json: string): Spec {
    return cast(JSON.parse(json), r('Spec'));
  }

  public static specToJson(value: Spec): string {
    return JSON.stringify(uncast(value, r('Spec')), null, 2);
  }
}

function invalidValue(typ: any, val: any): never {
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) { return val; }
    return invalidValue(typ, val);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) { }
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) { return val; }
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) { return invalidValue('array', val); }
    return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(typ: any, val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue('Date', val);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach(key => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps);
    });
    Object.getOwnPropertyNames(val).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps);
      }
    });
    return result;
  }

  if (typ === 'any') { return val; }
  if (typ === null) {
    if (val === null) { return val; }
    return invalidValue(typ, val);
  }
  if (typ === false) { return invalidValue(typ, val); }
  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) { return transformEnum(typ, val); }
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers') ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems') ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty('props') ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') { return transformDate(typ, val); }
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  Spec: o([
    { json: 'swagger', js: 'swagger', typ: u(undefined, '') },
    { json: 'info', js: 'info', typ: u(undefined, r('Info')) },
    { json: 'host', js: 'host', typ: u(undefined, '') },
    { json: 'schemes', js: 'schemes', typ: u(undefined, a('')) },
    { json: 'tags', js: 'tags', typ: u(undefined, a(r('Tag'))) },
    { json: 'paths', js: 'paths', typ: u(undefined, r('Paths')) },
    { json: 'definitions', js: 'definitions', typ: u(undefined, r('Definitions')) },
    { json: 'commons', js: 'commons', typ: u(undefined, r('Commons')) },
  ], false),
  Commons: o([
    { json: 'Headers', js: 'Headers', typ: u(undefined, r('Headers')) },
  ], false),
  Headers: o([
    { json: 'Country-Package', js: 'Country-Package', typ: u(undefined, r('CountryPackage')) },
    { json: 'Country-Package-Version', js: 'Country-Package-Version', typ: u(undefined, r('CountryPackage')) },
  ], false),
  CountryPackage: o([
    { json: 'description', js: 'description', typ: u(undefined, '') },
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
  ], false),
  Definitions: o([
    { json: 'Parameter', js: 'Parameter', typ: u(undefined, r('Parameter')) },
    { json: 'Parameters', js: 'Parameters', typ: u(undefined, r('Parameters')) },
    { json: 'Variable', js: 'Variable', typ: u(undefined, r('Variable')) },
    { json: 'Variables', js: 'Variables', typ: u(undefined, r('Parameters')) },
    { json: 'Formula', js: 'Formula', typ: u(undefined, r('Formula')) },
    { json: 'Brackets', js: 'Brackets', typ: u(undefined, r('Brackets')) },
    { json: 'Values', js: 'Values', typ: u(undefined, r('Brackets')) },
    { json: 'Entities', js: 'Entities', typ: u(undefined, r('Entities')) },
    { json: 'Roles', js: 'Roles', typ: u(undefined, r('RolesClass')) },
    { json: 'SituationInput', js: 'SituationInput', typ: u(undefined, r('SituationPut')) },
    { json: 'SituationOutput', js: 'SituationOutput', typ: u(undefined, r('SituationPut')) },
    { json: 'Trace', js: 'Trace', typ: u(undefined, r('Trace')) },
    { json: 'Building', js: 'Building', typ: u(undefined, r('Building')) },
    { json: 'Organisation', js: 'Organisation', typ: u(undefined, r('Organisation')) },
    { json: 'Family', js: 'Family', typ: u(undefined, r('Family')) },
    { json: 'Person', js: 'Person', typ: u(undefined, r('Person')) },
  ], false),
  Brackets: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, r('AdditionalProperties')) },
  ], false),
  AdditionalProperties: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'format', js: 'format', typ: u(undefined, '') },
  ], false),
  Building: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('BuildingProperties')) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, true) },
  ], false),
  BuildingProperties: o([
    { json: 'representatives', js: 'representatives', typ: u(undefined, r('Others')) },
    { json: 'others', js: 'others', typ: u(undefined, r('Others')) },
    { json: 'number_of_certificates', js: 'number_of_certificates', typ: u(undefined, r('Cdd15')) },
    { json: 'actual_GHG_KG_CO2', js: 'actual_GHG_KG_CO2', typ: u(undefined, r('Cdd15')) },
    { json: 'actual_GHG_KG_CO2_elec', js: 'actual_GHG_KG_CO2_elec', typ: u(undefined, r('Cdd15')) },
    { json: 'actual_GHG_KG_CO2_gas', js: 'actual_GHG_KG_CO2_gas', typ: u(undefined, r('Cdd15')) },
    { json: 'actual_GHG_per_apartment', js: 'actual_GHG_per_apartment', typ: u(undefined, r('Cdd15')) },
    { json: 'apartment_has_gym', js: 'apartment_has_gym', typ: u(undefined, r('Cdd15')) },
    { json: 'apartments_benchmark', js: 'apartments_benchmark', typ: u(undefined, r('Cdd15')) },
    { json: 'apartments_elec_usage', js: 'apartments_elec_usage', typ: u(undefined, r('Cdd15')) },
    { json: 'apartments_gas_kWh_usage', js: 'apartments_gas_kWh_usage', typ: u(undefined, r('Cdd15')) },
    { json: 'apartments_gas_usage', js: 'apartments_gas_usage', typ: u(undefined, r('Cdd15')) },
    { json: 'apartments_not_air_con_serviced', js: 'apartments_not_air_con_serviced', typ: u(undefined, r('Cdd15')) },
    { json: 'apartments_postcode', js: 'apartments_postcode', typ: u(undefined, r('Cdd15')) },
    { json: 'apartments_total_kWh_usage', js: 'apartments_total_kWh_usage', typ: u(undefined, r('Cdd15')) },
    { json: 'car_park', js: 'car_park', typ: u(undefined, r('Cdd15')) },
    { json: 'central_AC', js: 'central_AC', typ: u(undefined, r('Cdd15')) },
    { json: 'condenser_water', js: 'condenser_water', typ: u(undefined, r('Cdd15')) },
    { json: 'elec_perc_kWh_usage', js: 'elec_perc_kWh_usage', typ: u(undefined, r('Cdd15')) },
    { json: 'emissions_ratio', js: 'emissions_ratio', typ: u(undefined, r('Cdd15')) },
    { json: 'gym_input_status', js: 'gym_input_status', typ: u(undefined, r('BuildingTypeStatus')) },
    { json: 'input_number_of_mechanically_ventilated_parking_spaces', js: 'input_number_of_mechanically_ventilated_parking_spaces', typ: u(undefined, r('Cdd15')) },
    { json: 'input_number_of_naturally_ventilated_parking_spaces', js: 'input_number_of_naturally_ventilated_parking_spaces', typ: u(undefined, r('Cdd15')) },
    { json: 'interceptor', js: 'interceptor', typ: u(undefined, r('Cdd15')) },
    { json: 'lifts', js: 'lifts', typ: u(undefined, r('Cdd15')) },
    { json: 'number_of_apartments', js: 'number_of_apartments', typ: u(undefined, r('Cdd15')) },
    { json: 'number_of_central_ac_apartments', js: 'number_of_central_ac_apartments', typ: u(undefined, r('Cdd15')) },
    { json: 'number_of_condenser_water_serviced_apartments', js: 'number_of_condenser_water_serviced_apartments', typ: u(undefined, r('Cdd15')) },
    { json: 'number_of_lift_serviced_apartments', js: 'number_of_lift_serviced_apartments', typ: u(undefined, r('Cdd15')) },
    { json: 'number_of_mechanically_ventilated_parking_spaces', js: 'number_of_mechanically_ventilated_parking_spaces', typ: u(undefined, r('Cdd15')) },
    { json: 'number_of_naturally_ventilated_parking_spaces', js: 'number_of_naturally_ventilated_parking_spaces', typ: u(undefined, r('Cdd15')) },
    { json: 'pool_input_status', js: 'pool_input_status', typ: u(undefined, r('BuildingTypeStatus')) },
    { json: 'pool_parameter_coefficient', js: 'pool_parameter_coefficient', typ: u(undefined, r('Cdd15')) },
    { json: 'pool_status', js: 'pool_status', typ: u(undefined, r('Cdd15')) },
    { json: 'predicted_electricity_kWh', js: 'predicted_electricity_kWh', typ: u(undefined, r('Cdd15')) },
    { json: 'predicted_energy_emissions', js: 'predicted_energy_emissions', typ: u(undefined, r('Cdd15')) },
    { json: 'predicted_gas_MJ', js: 'predicted_gas_MJ', typ: u(undefined, r('Cdd15')) },
    { json: 'building_type', js: 'building_type', typ: u(undefined, r('Cdd15')) },
    { json: 'building_type_status', js: 'building_type_status', typ: u(undefined, r('BuildingTypeStatus')) },
    { json: 'is_apartment_building', js: 'is_apartment_building', typ: u(undefined, r('Cdd15')) },
    { json: 'is_data_centre', js: 'is_data_centre', typ: u(undefined, r('Cdd15')) },
    { json: 'is_hospital', js: 'is_hospital', typ: u(undefined, r('Cdd15')) },
    { json: 'is_hotel', js: 'is_hotel', typ: u(undefined, r('Cdd15')) },
    { json: 'is_office', js: 'is_office', typ: u(undefined, r('Cdd15')) },
    { json: 'is_shopping_centre', js: 'is_shopping_centre', typ: u(undefined, r('Cdd15')) },
    { json: 'postcode', js: 'postcode', typ: u(undefined, r('Cdd15')) },
    { json: 'all_on_site_sources_identified', js: 'all_on_site_sources_identified', typ: u(undefined, r('Cdd15')) },
    { json: 'unaccounted_elec_metered_and_recorded', js: 'unaccounted_elec_metered_and_recorded', typ: u(undefined, r('Cdd15')) },
    { json: 'ESC_creation_date', js: 'ESC_creation_date', typ: u(undefined, r('Cdd15')) },
    { json: 'NABERS_eligible_to_create_ESCs', js: 'NABERS_eligible_to_create_ESCs', typ: u(undefined, r('Cdd15')) },
    { json: 'additional_energy_savings_created', js: 'additional_energy_savings_created', typ: u(undefined, r('Cdd15')) },
    { json: 'current_NABERS_star_rating', js: 'current_NABERS_star_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'energy_saver', js: 'energy_saver', typ: u(undefined, r('Cdd15')) },
    { json: 'energy_savings_date', js: 'energy_savings_date', typ: u(undefined, r('Cdd15')) },
    { json: 'first_nabers_rating', js: 'first_nabers_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'historical_baseline_more_than_7_years', js: 'historical_baseline_more_than_7_years', typ: u(undefined, r('Cdd15')) },
    { json: 'historical_baseline_no_more_than_7_years_before_current_rating', js: 'historical_baseline_no_more_than_7_years_before_current_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'historical_baseline_rating_meets_similar_configuration_criteria', js: 'historical_baseline_rating_meets_similar_configuration_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'implementation_date', js: 'implementation_date', typ: u(undefined, r('Cdd15')) },
    { json: 'includes_GreenPower', js: 'includes_GreenPower', typ: u(undefined, r('Cdd15')) },
    { json: 'is_current_NABERS_rating', js: 'is_current_NABERS_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'meets_minimum_star_rating_requirement', js: 'meets_minimum_star_rating_requirement', typ: u(undefined, r('Cdd15')) },
    { json: 'nabers_value_lower_than_previous_historical_NABERS_value', js: 'nabers_value_lower_than_previous_historical_NABERS_value', typ: u(undefined, r('Cdd15')) },
    { json: 'nabers_value_previously_used_to_set_historical_NABERS_rating', js: 'nabers_value_previously_used_to_set_historical_NABERS_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'previous_annual_creation_occurred', js: 'previous_annual_creation_occurred', typ: u(undefined, r('Cdd15')) },
    { json: 'rating_not_obt_for_legal_requirement', js: 'rating_not_obt_for_legal_requirement', typ: u(undefined, r('Cdd15')) },
    { json: 'star_rating_exceeds_method_one_benchmark_rating', js: 'star_rating_exceeds_method_one_benchmark_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'star_rating_exceeds_method_two_benchmark_rating', js: 'star_rating_exceeds_method_two_benchmark_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'time_between_current_ratings_and_ESC_date_within_range', js: 'time_between_current_ratings_and_ESC_date_within_range', typ: u(undefined, r('Cdd15')) },
    { json: 'uses_NABERS_ratings_tool', js: 'uses_NABERS_ratings_tool', typ: u(undefined, r('Cdd15')) },
    { json: 'measured_electricity_consumption', js: 'measured_electricity_consumption', typ: u(undefined, r('Cdd15')) },
    { json: 'measured_gas_consumption', js: 'measured_gas_consumption', typ: u(undefined, r('Cdd15')) },
    { json: 'nabers_electricity', js: 'nabers_electricity', typ: u(undefined, r('Cdd15')) },
    { json: 'nabers_gas', js: 'nabers_gas', typ: u(undefined, r('Cdd15')) },
    { json: 'onsite_unaccounted_electricity', js: 'onsite_unaccounted_electricity', typ: u(undefined, r('Cdd15')) },
    { json: 'input_years_of_forward_creation', js: 'input_years_of_forward_creation', typ: u(undefined, r('BuildingTypeStatus')) },
    { json: 'total_forward_created_electricity_savings', js: 'total_forward_created_electricity_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'total_forward_created_gas_savings', js: 'total_forward_created_gas_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'year_one_forward_created_electricity_savings', js: 'year_one_forward_created_electricity_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'year_one_forward_created_gas_savings', js: 'year_one_forward_created_gas_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'year_three_forward_created_electricity_savings', js: 'year_three_forward_created_electricity_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'year_three_forward_created_gas_savings', js: 'year_three_forward_created_gas_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'year_two_forward_created_electricity_savings', js: 'year_two_forward_created_electricity_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'year_two_forward_created_gas_savings', js: 'year_two_forward_created_gas_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'years_of_forward_creation', js: 'years_of_forward_creation', typ: u(undefined, r('Cdd15')) },
    { json: 'NRYi1', js: 'NRYi1', typ: u(undefined, r('Cdd15')) },
    { json: 'annually_created_electricity_savings', js: 'annually_created_electricity_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'annually_created_gas_savings', js: 'annually_created_gas_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'counted_elec_savings', js: 'counted_elec_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'counted_energy_savings', js: 'counted_energy_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'counted_gas_savings', js: 'counted_gas_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'electricity_savings_previous_year', js: 'electricity_savings_previous_year', typ: u(undefined, r('Cdd15')) },
    { json: 'gas_savings_previous_year', js: 'gas_savings_previous_year', typ: u(undefined, r('Cdd15')) },
    { json: 'regional_network_factor', js: 'regional_network_factor', typ: u(undefined, r('Cdd15')) },
    { json: 'apartments_benchmark_elec_consumption', js: 'apartments_benchmark_elec_consumption', typ: u(undefined, r('Cdd15')) },
    { json: 'apartments_benchmark_gas_consumption_MJ', js: 'apartments_benchmark_gas_consumption_MJ', typ: u(undefined, r('Cdd15')) },
    { json: 'benchmark_elec_consumption', js: 'benchmark_elec_consumption', typ: u(undefined, r('Cdd15')) },
    { json: 'benchmark_elec_consumption_MWh', js: 'benchmark_elec_consumption_MWh', typ: u(undefined, r('Cdd15')) },
    { json: 'benchmark_gas_consumption_MJ', js: 'benchmark_gas_consumption_MJ', typ: u(undefined, r('Cdd15')) },
    { json: 'benchmark_gas_consumption_MWh', js: 'benchmark_gas_consumption_MWh', typ: u(undefined, r('Cdd15')) },
    { json: 'electricity_savings', js: 'electricity_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'energy_savings_type', js: 'energy_savings_type', typ: u(undefined, r('BuildingTypeStatus')) },
    { json: 'gas_savings', js: 'gas_savings', typ: u(undefined, r('Cdd15')) },
    { json: 'hours_per_week_with_20_percent_occupancy', js: 'hours_per_week_with_20_percent_occupancy', typ: u(undefined, r('Cdd15')) },
    { json: 'net_lettable_area', js: 'net_lettable_area', typ: u(undefined, r('Cdd15')) },
    { json: 'offices_benchmark_elec_consumption', js: 'offices_benchmark_elec_consumption', typ: u(undefined, r('Cdd15')) },
    { json: 'offices_benchmark_gas_consumption_MJ', js: 'offices_benchmark_gas_consumption_MJ', typ: u(undefined, r('Cdd15')) },
    { json: 'ESC_cur_diff_as_months', js: 'ESC_cur_diff_as_months', typ: u(undefined, r('Cdd15')) },
    { json: 'age_of_historical_rating', js: 'age_of_historical_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'baseline_rating_year', js: 'baseline_rating_year', typ: u(undefined, r('Cdd15')) },
    { json: 'benchmark_nabers_rating', js: 'benchmark_nabers_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'built_after_nov_2006', js: 'built_after_nov_2006', typ: u(undefined, r('Cdd15')) },
    { json: 'current_historical_date_distance', js: 'current_historical_date_distance', typ: u(undefined, r('Cdd15')) },
    { json: 'current_rating_period_length', js: 'current_rating_period_length', typ: u(undefined, r('Cdd15')) },
    { json: 'current_rating_year', js: 'current_rating_year', typ: u(undefined, r('Cdd15')) },
    { json: 'end_date_of_current_nabers_rating_period', js: 'end_date_of_current_nabers_rating_period', typ: u(undefined, r('Cdd15')) },
    { json: 'end_date_of_current_rating_year', js: 'end_date_of_current_rating_year', typ: u(undefined, r('Cdd15')) },
    { json: 'end_date_of_historical_nabers_rating_period', js: 'end_date_of_historical_nabers_rating_period', typ: u(undefined, r('Cdd15')) },
    { json: 'historical_NABERS_star_rating', js: 'historical_NABERS_star_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'historical_rating_period_length', js: 'historical_rating_period_length', typ: u(undefined, r('Cdd15')) },
    { json: 'method_one', js: 'method_one', typ: u(undefined, r('Cdd15')) },
    { json: 'method_one_can_be_used', js: 'method_one_can_be_used', typ: u(undefined, r('Cdd15')) },
    { json: 'method_two', js: 'method_two', typ: u(undefined, r('Cdd15')) },
    { json: 'previous_forward_creation_occurred', js: 'previous_forward_creation_occurred', typ: u(undefined, r('Cdd15')) },
    { json: 'previous_historical_baseline_rating', js: 'previous_historical_baseline_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'start_date_of_current_nabers_rating_period', js: 'start_date_of_current_nabers_rating_period', typ: u(undefined, r('Cdd15')) },
    { json: 'start_date_of_historical_nabers_rating_period', js: 'start_date_of_historical_nabers_rating_period', typ: u(undefined, r('Cdd15')) },
    { json: 'time_between_historical_and_current_ratings_within_range', js: 'time_between_historical_and_current_ratings_within_range', typ: u(undefined, r('Cdd15')) },
    { json: 'today_date', js: 'today_date', typ: u(undefined, r('Cdd15')) },
    { json: 'coal_KG_to_KWh', js: 'coal_KG_to_KWh', typ: u(undefined, r('Cdd15')) },
    { json: 'coal_in_KG', js: 'coal_in_KG', typ: u(undefined, r('Cdd15')) },
    { json: 'diesel_in_litres', js: 'diesel_in_litres', typ: u(undefined, r('Cdd15')) },
    { json: 'diesel_litres_to_KWh', js: 'diesel_litres_to_KWh', typ: u(undefined, r('Cdd15')) },
    { json: 'gas_MJ_to_KWh', js: 'gas_MJ_to_KWh', typ: u(undefined, r('Cdd15')) },
    { json: 'gas_in_MJ', js: 'gas_in_MJ', typ: u(undefined, r('Cdd15')) },
    { json: 'benchmark_star_rating', js: 'benchmark_star_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'building_state_location', js: 'building_state_location', typ: u(undefined, r('Cdd15')) },
    { json: 'coal_kWh', js: 'coal_kWh', typ: u(undefined, r('Cdd15')) },
    { json: 'diesel_kWh', js: 'diesel_kWh', typ: u(undefined, r('Cdd15')) },
    { json: 'elec_kWh', js: 'elec_kWh', typ: u(undefined, r('Cdd15')) },
    { json: 'gas_kWh', js: 'gas_kWh', typ: u(undefined, r('Cdd15')) },
    { json: 'number_of_computers', js: 'number_of_computers', typ: u(undefined, r('Cdd15')) },
    { json: 'offices_benchmark_star_rating', js: 'offices_benchmark_star_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'perc_coal_kwh', js: 'perc_coal_kwh', typ: u(undefined, r('Cdd15')) },
    { json: 'perc_diesel_kwh', js: 'perc_diesel_kwh', typ: u(undefined, r('Cdd15')) },
    { json: 'perc_elec_kwh', js: 'perc_elec_kwh', typ: u(undefined, r('Cdd15')) },
    { json: 'perc_gas_kwh', js: 'perc_gas_kwh', typ: u(undefined, r('Cdd15')) },
    { json: 'rating_type', js: 'rating_type', typ: u(undefined, r('Cdd15')) },
    { json: 'rating_type_status', js: 'rating_type_status', typ: u(undefined, r('BuildingTypeStatus')) },
    { json: 'total_energy_kwh', js: 'total_energy_kwh', typ: u(undefined, r('Cdd15')) },
    { json: 'CDD_15', js: 'CDD_15', typ: u(undefined, r('Cdd15')) },
    { json: 'Dequip', js: 'Dequip', typ: u(undefined, r('Cdd15')) },
    { json: 'GEClimcorr_tenancy', js: 'GEClimcorr_tenancy', typ: u(undefined, r('Cdd15')) },
    { json: 'GE_25_percent_reduction', js: 'GE_25_percent_reduction', typ: u(undefined, r('Cdd15')) },
    { json: 'GE_50_percent_reduction', js: 'GE_50_percent_reduction', typ: u(undefined, r('Cdd15')) },
    { json: 'GE_5star_original_rating', js: 'GE_5star_original_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'GEclimcorr', js: 'GEclimcorr', typ: u(undefined, r('Cdd15')) },
    { json: 'GEwholemax', js: 'GEwholemax', typ: u(undefined, r('Cdd15')) },
    { json: 'HDD_18', js: 'HDD_18', typ: u(undefined, r('Cdd15')) },
    { json: 'NGE_5star_original_rating', js: 'NGE_5star_original_rating', typ: u(undefined, r('Cdd15')) },
    { json: 'NGEmax', js: 'NGEmax', typ: u(undefined, r('Cdd15')) },
    { json: 'SGE_tenancy', js: 'SGE_tenancy', typ: u(undefined, r('Cdd15')) },
    { json: 'SGEcoal', js: 'SGEcoal', typ: u(undefined, r('Cdd15')) },
    { json: 'SGEelec', js: 'SGEelec', typ: u(undefined, r('Cdd15')) },
    { json: 'SGEgas', js: 'SGEgas', typ: u(undefined, r('Cdd15')) },
    { json: 'SGEoil', js: 'SGEoil', typ: u(undefined, r('Cdd15')) },
    { json: 'SGEtenancy', js: 'SGEtenancy', typ: u(undefined, r('Cdd15')) },
    { json: 'base_building_GEmax', js: 'base_building_GEmax', typ: u(undefined, r('Cdd15')) },
    { json: 'climate_zone', js: 'climate_zone', typ: u(undefined, r('Cdd15')) },
    { json: 'coefficient_A', js: 'coefficient_A', typ: u(undefined, r('Cdd15')) },
    { json: 'coefficient_B', js: 'coefficient_B', typ: u(undefined, r('Cdd15')) },
    { json: 'f_base_building', js: 'f_base_building', typ: u(undefined, r('Cdd15')) },
    { json: 'f_tenancy', js: 'f_tenancy', typ: u(undefined, r('Cdd15')) },
    { json: 'maximum_nabers_adjusted_hours', js: 'maximum_nabers_adjusted_hours', typ: u(undefined, r('Cdd15')) },
    { json: 'nabers_adjusted_hours', js: 'nabers_adjusted_hours', typ: u(undefined, r('Cdd15')) },
    { json: 'office_maximum_electricity_consumption', js: 'office_maximum_electricity_consumption', typ: u(undefined, r('Cdd15')) },
    { json: 'office_maximum_gas_consumption', js: 'office_maximum_gas_consumption', typ: u(undefined, r('Cdd15')) },
    { json: 'tenancy_GEmax', js: 'tenancy_GEmax', typ: u(undefined, r('Cdd15')) },
    { json: 'term_1', js: 'term_1', typ: u(undefined, r('Cdd15')) },
    { json: 'term_2', js: 'term_2', typ: u(undefined, r('Cdd15')) },
    { json: 'term_3', js: 'term_3', typ: u(undefined, r('Cdd15')) },
    { json: 'term_4', js: 'term_4', typ: u(undefined, r('Cdd15')) },
    { json: 'term_5', js: 'term_5', typ: u(undefined, r('Cdd15')) },
  ], false),
  Cdd15: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, r('Description')) },
  ], false),
  Description: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
  ], false),
  BuildingTypeStatus: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, r('DefinitionPeriod')) },
  ], false),
  DefinitionPeriod: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'enum', js: 'enum', typ: u(undefined, a('')) },
  ], false),
  Others: o([
    { json: 'type', js: 'type', typ: u(undefined, r('OthersType')) },
    { json: 'items', js: 'items', typ: u(undefined, r('Description')) },
  ], false),
  Entities: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('EntitiesProperties')) },
  ], false),
  EntitiesProperties: o([
    { json: 'description', js: 'description', typ: u(undefined, r('Description')) },
    { json: 'documentation', js: 'documentation', typ: u(undefined, r('Description')) },
    { json: 'plural', js: 'plural', typ: u(undefined, r('Description')) },
    { json: 'roles', js: 'roles', typ: u(undefined, r('Roles')) },
  ], false),
  Roles: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, r('Values')) },
  ], false),
  Values: o([
    { json: '$ref', js: '$ref', typ: u(undefined, '') },
  ], false),
  Family: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('FamilyProperties')) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, true) },
  ], false),
  FamilyProperties: o([
    { json: 'parents', js: 'parents', typ: u(undefined, r('Others')) },
    { json: 'children', js: 'children', typ: u(undefined, r('Others')) },
    { json: 'others', js: 'others', typ: u(undefined, r('Others')) },
    { json: 'active_kids__family_has_children_eligible', js: 'active_kids__family_has_children_eligible', typ: u(undefined, r('Cdd15')) },
    { json: 'creative_kids__family_has_children_eligible', js: 'creative_kids__family_has_children_eligible', typ: u(undefined, r('Cdd15')) },
  ], false),
  Formula: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('FormulaProperties')) },
  ], false),
  FormulaProperties: o([
    { json: 'content', js: 'content', typ: u(undefined, r('Description')) },
    { json: 'source', js: 'source', typ: u(undefined, r('Description')) },
  ], false),
  Organisation: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('OrganisationProperties')) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, true) },
  ], false),
  OrganisationProperties: o([
    { json: 'representatives', js: 'representatives', typ: u(undefined, r('Others')) },
    { json: 'others', js: 'others', typ: u(undefined, r('Others')) },
    { json: 'art_union__game_meets_criteria', js: 'art_union__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'duration_of_authority', js: 'duration_of_authority', typ: u(undefined, r('Cdd15')) },
    { json: 'fixed_component_fee_in_units', js: 'fixed_component_fee_in_units', typ: u(undefined, r('Cdd15')) },
    { json: 'processing_component_fee_in_units', js: 'processing_component_fee_in_units', typ: u(undefined, r('Cdd15')) },
    { json: 'total_fee_in_dollars', js: 'total_fee_in_dollars', typ: u(undefined, r('Cdd15')) },
    { json: 'total_fee_in_units', js: 'total_fee_in_units', typ: u(undefined, r('Cdd15')) },
    { json: 'draw_lottery__game_meets_criteria', js: 'draw_lottery__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'free_lottery__game_meets_criteria', js: 'free_lottery__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_art_union_gaming', js: 'gaming_activity_is_art_union_gaming', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_charity_housie', js: 'gaming_activity_is_charity_housie', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_club_bingo', js: 'gaming_activity_is_club_bingo', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_draw_lottery', js: 'gaming_activity_is_draw_lottery', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_free_lottery', js: 'gaming_activity_is_free_lottery', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_free_to_enter', js: 'gaming_activity_is_free_to_enter', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_mini_numbers_lottery', js: 'gaming_activity_is_mini_numbers_lottery', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_no_draw_lottery', js: 'gaming_activity_is_no_draw_lottery', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_progressive_lottery', js: 'gaming_activity_is_progressive_lottery', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_promotional_raffle', js: 'gaming_activity_is_promotional_raffle', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_social_housie', js: 'gaming_activity_is_social_housie', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_sweep_calcutta', js: 'gaming_activity_is_sweep_calcutta', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_is_trade_promotion', js: 'gaming_activity_is_trade_promotion', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_other_for_charitable_purposes', js: 'gaming_activity_other_for_charitable_purposes', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_solely_for_social_purposes', js: 'gaming_activity_solely_for_social_purposes', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_solely_or_partly_for_fundraising', js: 'gaming_activity_solely_or_partly_for_fundraising', typ: u(undefined, r('Cdd15')) },
    { json: 'charity_housie__game_meets_criteria', js: 'charity_housie__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'club_bingo__game_meets_criteria', js: 'club_bingo__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'condition_for_multiple_gaming_activities', js: 'condition_for_multiple_gaming_activities', typ: u(undefined, r('Cdd15')) },
    { json: 'condition_for_no_individual_prize', js: 'condition_for_no_individual_prize', typ: u(undefined, r('Cdd15')) },
    { json: 'social_housie__game_meets_criteria', js: 'social_housie__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'mini_numbers_lottery__game_meets_criteria', js: 'mini_numbers_lottery__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'no_draw_lottery__game_meets_criteria', js: 'no_draw_lottery__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'is_art_union', js: 'is_art_union', typ: u(undefined, r('Cdd15')) },
    { json: 'is_charity', js: 'is_charity', typ: u(undefined, r('Cdd15')) },
    { json: 'is_for_profit_business', js: 'is_for_profit_business', typ: u(undefined, r('Cdd15')) },
    { json: 'is_greyhound_racing_club', js: 'is_greyhound_racing_club', typ: u(undefined, r('Cdd15')) },
    { json: 'is_harness_racing_club', js: 'is_harness_racing_club', typ: u(undefined, r('Cdd15')) },
    { json: 'is_not_for_profit', js: 'is_not_for_profit', typ: u(undefined, r('Cdd15')) },
    { json: 'is_political_party', js: 'is_political_party', typ: u(undefined, r('Cdd15')) },
    { json: 'is_racing_club', js: 'is_racing_club', typ: u(undefined, r('Cdd15')) },
    { json: 'is_registered_club', js: 'is_registered_club', typ: u(undefined, r('Cdd15')) },
    { json: 'is_trade_union', js: 'is_trade_union', typ: u(undefined, r('Cdd15')) },
    { json: 'housie_lottery_sweep_or_other', js: 'housie_lottery_sweep_or_other', typ: u(undefined, r('Cdd15')) },
    { json: 'other_gaming_activity__game_meets_criteria', js: 'other_gaming_activity__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'has_authority', js: 'has_authority', typ: u(undefined, r('Cdd15')) },
    { json: 'gross_proceeds_from_gaming_activity', js: 'gross_proceeds_from_gaming_activity', typ: u(undefined, r('Cdd15')) },
    { json: 'highest_value_of_individual_prize_in_gaming_activity', js: 'highest_value_of_individual_prize_in_gaming_activity', typ: u(undefined, r('Cdd15')) },
    { json: 'is_another_gaming_activity_happening', js: 'is_another_gaming_activity_happening', typ: u(undefined, r('Cdd15')) },
    { json: 'money_payable_as_separate_prize', js: 'money_payable_as_separate_prize', typ: u(undefined, r('Cdd15')) },
    { json: 'net_proceeds_returned_to_participants', js: 'net_proceeds_returned_to_participants', typ: u(undefined, r('Cdd15')) },
    { json: 'no_fee_charged_for_conducting_game', js: 'no_fee_charged_for_conducting_game', typ: u(undefined, r('Cdd15')) },
    { json: 'no_individual_prize', js: 'no_individual_prize', typ: u(undefined, r('Cdd15')) },
    { json: 'no_prize_consists_of_money', js: 'no_prize_consists_of_money', typ: u(undefined, r('Cdd15')) },
    { json: 'participation_is_free', js: 'participation_is_free', typ: u(undefined, r('Cdd15')) },
    { json: 'proceeds_to_benefitting_organisation', js: 'proceeds_to_benefitting_organisation', typ: u(undefined, r('Cdd15')) },
    { json: 'proceeds_used_for_meeting_cost_of_prizes', js: 'proceeds_used_for_meeting_cost_of_prizes', typ: u(undefined, r('Cdd15')) },
    { json: 'total_expenses_for_conducting_gaming_activity', js: 'total_expenses_for_conducting_gaming_activity', typ: u(undefined, r('Cdd15')) },
    { json: 'total_prize_value_from_single_gaming_session', js: 'total_prize_value_from_single_gaming_session', typ: u(undefined, r('Cdd15')) },
    { json: 'total_prize_value_of_all_prizes_from_gaming_activity', js: 'total_prize_value_of_all_prizes_from_gaming_activity', typ: u(undefined, r('Cdd15')) },
    { json: 'total_prize_value_of_all_prizes_from_single_gaming_session', js: 'total_prize_value_of_all_prizes_from_single_gaming_session', typ: u(undefined, r('Cdd15')) },
    { json: 'value_of_bonus_prize', js: 'value_of_bonus_prize', typ: u(undefined, r('Cdd15')) },
    { json: 'value_of_individual_prize', js: 'value_of_individual_prize', typ: u(undefined, r('Cdd15')) },
    { json: 'value_of_jackpot_prize', js: 'value_of_jackpot_prize', typ: u(undefined, r('Cdd15')) },
    { json: 'condition_for_exceeding_total_prize_value', js: 'condition_for_exceeding_total_prize_value', typ: u(undefined, r('Cdd15')) },
    { json: 'progressive_lottery__game_meets_criteria', js: 'progressive_lottery__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_organised_for_patronage', js: 'gaming_activity_organised_for_patronage', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_session_duration', js: 'gaming_activity_session_duration', typ: u(undefined, r('Cdd15')) },
    { json: 'prize_paid_between_specific_timings', js: 'prize_paid_between_specific_timings', typ: u(undefined, r('Cdd15')) },
    { json: 'promotional_raffle__game_meets_criteria', js: 'promotional_raffle__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'more_than_ten_tickets_sold_to_same_player', js: 'more_than_ten_tickets_sold_to_same_player', typ: u(undefined, r('Cdd15')) },
    { json: 'number_of_tickets', js: 'number_of_tickets', typ: u(undefined, r('Cdd15')) },
    { json: 'ticket_cost', js: 'ticket_cost', typ: u(undefined, r('Cdd15')) },
    { json: 'condition_for_exceeding_total_prize_value_for_trade_promotion', js: 'condition_for_exceeding_total_prize_value_for_trade_promotion', typ: u(undefined, r('Cdd15')) },
    { json: 'gaming_activity_has_business_principal_consent', js: 'gaming_activity_has_business_principal_consent', typ: u(undefined, r('Cdd15')) },
    { json: 'participation_obtained_by_purchasing_goods', js: 'participation_obtained_by_purchasing_goods', typ: u(undefined, r('Cdd15')) },
    { json: 'trade_promotion__game_meets_criteria', js: 'trade_promotion__game_meets_criteria', typ: u(undefined, r('Cdd15')) },
    { json: 'venue_is_licensed_premises', js: 'venue_is_licensed_premises', typ: u(undefined, r('Cdd15')) },
    { json: 'venue_is_registered_club', js: 'venue_is_registered_club', typ: u(undefined, r('Cdd15')) },
  ], false),
  Parameter: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('ParameterProperties')) },
    { json: 'example', js: 'example', typ: u(undefined, r('ParameterExample')) },
  ], false),
  ParameterExample: o([
    { json: 'description', js: 'description', typ: u(undefined, null) },
    { json: 'id', js: 'id', typ: u(undefined, '') },
    { json: 'metadata', js: 'metadata', typ: u(undefined, r('Metadata')) },
    { json: 'source', js: 'source', typ: u(undefined, '') },
    { json: 'subparams', js: 'subparams', typ: u(undefined, r('Metadata')) },
  ], false),
  Metadata: o([
  ], false),
  ParameterProperties: o([
    { json: 'values', js: 'values', typ: u(undefined, r('Values')) },
    { json: 'brackets', js: 'brackets', typ: u(undefined, r('Roles')) },
    { json: 'subparams', js: 'subparams', typ: u(undefined, r('Subparams')) },
    { json: 'metadata', js: 'metadata', typ: u(undefined, r('Description')) },
    { json: 'description', js: 'description', typ: u(undefined, r('Description')) },
    { json: 'id', js: 'id', typ: u(undefined, r('AdditionalProperties')) },
    { json: 'source', js: 'source', typ: u(undefined, r('Description')) },
  ], false),
  Subparams: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, r('SubparamsAdditionalProperties')) },
  ], false),
  SubparamsAdditionalProperties: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('PurpleProperties')) },
  ], false),
  PurpleProperties: o([
    { json: 'definition', js: 'definition', typ: u(undefined, r('Description')) },
  ], false),
  Parameters: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, r('ParametersAdditionalProperties')) },
  ], false),
  ParametersAdditionalProperties: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('FluffyProperties')) },
  ], false),
  FluffyProperties: o([
    { json: 'description', js: 'description', typ: u(undefined, r('Description')) },
    { json: 'href', js: 'href', typ: u(undefined, r('Description')) },
  ], false),
  Person: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, m(r('Cdd15'))) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, true) },
  ], false),
  RolesClass: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('RolesProperties')) },
  ], false),
  RolesProperties: o([
    { json: 'description', js: 'description', typ: u(undefined, r('Description')) },
    { json: 'max', js: 'max', typ: u(undefined, r('Description')) },
    { json: 'plural', js: 'plural', typ: u(undefined, r('Description')) },
  ], false),
  SituationPut: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, true) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('SituationInputProperties')) },
    { json: 'example', js: 'example', typ: u(undefined, '') },
  ], false),
  SituationInputProperties: o([
    { json: 'buildings', js: 'buildings', typ: u(undefined, r('Roles')) },
    { json: 'organisations', js: 'organisations', typ: u(undefined, r('Roles')) },
    { json: 'families', js: 'families', typ: u(undefined, r('Roles')) },
    { json: 'persons', js: 'persons', typ: u(undefined, r('Roles')) },
  ], false),
  Trace: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('TraceProperties')) },
    { json: 'example', js: 'example', typ: u(undefined, '') },
  ], false),
  TraceProperties: o([
    { json: 'requestedCalculations', js: 'requestedCalculations', typ: u(undefined, r('Others')) },
    { json: 'entitiesDescription', js: 'entitiesDescription', typ: u(undefined, r('EntitiesDescription')) },
    { json: 'trace', js: 'trace', typ: u(undefined, r('TraceClass')) },
  ], false),
  EntitiesDescription: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('EntitiesDescriptionProperties')) },
  ], false),
  EntitiesDescriptionProperties: o([
    { json: 'buildings', js: 'buildings', typ: u(undefined, r('Others')) },
    { json: 'organisations', js: 'organisations', typ: u(undefined, r('Others')) },
    { json: 'families', js: 'families', typ: u(undefined, r('Others')) },
    { json: 'persons', js: 'persons', typ: u(undefined, r('Others')) },
  ], false),
  TraceClass: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'additionalProperties', js: 'additionalProperties', typ: u(undefined, r('TraceAdditionalProperties')) },
  ], false),
  TraceAdditionalProperties: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('TentacledProperties')) },
  ], false),
  TentacledProperties: o([
    { json: 'value', js: 'value', typ: u(undefined, r('Others')) },
    { json: 'dependencies', js: 'dependencies', typ: u(undefined, r('Others')) },
    { json: 'parameters', js: 'parameters', typ: u(undefined, r('Cdd15')) },
  ], false),
  Variable: o([
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
    { json: 'properties', js: 'properties', typ: u(undefined, r('VariableProperties')) },
    { json: 'example', js: 'example', typ: u(undefined, r('VariableExample')) },
  ], false),
  VariableExample: o([
    { json: 'id', js: 'id', typ: u(undefined, '') },
    { json: 'description', js: 'description', typ: u(undefined, '') },
    { json: 'valueType', js: 'valueType', typ: u(undefined, '') },
    { json: 'defaultValue', js: 'defaultValue', typ: u(undefined, 0) },
    { json: 'definitionPeriod', js: 'definitionPeriod', typ: u(undefined, '') },
    { json: 'entity', js: 'entity', typ: u(undefined, '') },
    { json: 'source', js: 'source', typ: u(undefined, '') },
    { json: 'formulas', js: 'formulas', typ: u(undefined, r('Formulas')) },
  ], false),
  Formulas: o([
    { json: '0001-01-01', js: '0001-01-01', typ: u(undefined, r('The00010101')) },
  ], false),
  The00010101: o([
    { json: 'source', js: 'source', typ: u(undefined, '') },
    { json: 'content', js: 'content', typ: u(undefined, '') },
  ], false),
  VariableProperties: o([
    { json: 'defaultValue', js: 'defaultValue', typ: u(undefined, r('Description')) },
    { json: 'definitionPeriod', js: 'definitionPeriod', typ: u(undefined, r('DefinitionPeriod')) },
    { json: 'description', js: 'description', typ: u(undefined, r('Description')) },
    { json: 'entity', js: 'entity', typ: u(undefined, r('Description')) },
    { json: 'formulas', js: 'formulas', typ: u(undefined, r('Roles')) },
    { json: 'id', js: 'id', typ: u(undefined, r('Description')) },
    { json: 'reference', js: 'reference', typ: u(undefined, r('Others')) },
    { json: 'source', js: 'source', typ: u(undefined, r('Description')) },
    { json: 'valueType', js: 'valueType', typ: u(undefined, r('DefinitionPeriod')) },
  ], false),
  Info: o([
    { json: 'title', js: 'title', typ: u(undefined, '') },
    { json: 'description', js: 'description', typ: u(undefined, '') },
    { json: 'version', js: 'version', typ: u(undefined, '') },
    { json: 'termsOfService', js: 'termsOfService', typ: u(undefined, '') },
    { json: 'contact', js: 'contact', typ: u(undefined, r('Contact')) },
    { json: 'license', js: 'license', typ: u(undefined, r('License')) },
  ], false),
  Contact: o([
    { json: 'email', js: 'email', typ: u(undefined, '') },
  ], false),
  License: o([
    { json: 'name', js: 'name', typ: u(undefined, '') },
    { json: 'url', js: 'url', typ: u(undefined, '') },
  ], false),
  Paths: o([
    { json: '/calculate', js: '/calculate', typ: u(undefined, r('Calculate')) },
    { json: '/parameters', js: '/parameters', typ: u(undefined, r('EntitiesClass')) },
    { json: '/parameter/{parameterID}', js: '/parameter/{parameterID}', typ: u(undefined, r('ID')) },
    { json: '/variables', js: '/variables', typ: u(undefined, r('EntitiesClass')) },
    { json: '/variable/{variableID}', js: '/variable/{variableID}', typ: u(undefined, r('ID')) },
    { json: '/entities', js: '/entities', typ: u(undefined, r('EntitiesClass')) },
    { json: '/trace', js: '/trace', typ: u(undefined, r('Calculate')) },
    { json: '/spec', js: '/spec', typ: u(undefined, r('SpecClass')) },
  ], false),
  Calculate: o([
    { json: 'post', js: 'post', typ: u(undefined, r('Post')) },
  ], false),
  Post: o([
    { json: 'summary', js: 'summary', typ: u(undefined, '') },
    { json: 'tags', js: 'tags', typ: u(undefined, a('')) },
    { json: 'operationId', js: 'operationId', typ: u(undefined, '') },
    { json: 'consumes', js: 'consumes', typ: u(undefined, a('')) },
    { json: 'produces', js: 'produces', typ: u(undefined, a('')) },
    { json: 'parameters', js: 'parameters', typ: u(undefined, a(r('ParameterElement'))) },
    { json: 'responses', js: 'responses', typ: u(undefined, m(r('Response'))) },
  ], false),
  ParameterElement: o([
    { json: 'in', js: 'in', typ: u(undefined, '') },
    { json: 'name', js: 'name', typ: u(undefined, '') },
    { json: 'description', js: 'description', typ: u(undefined, '') },
    { json: 'required', js: 'required', typ: u(undefined, true) },
    { json: 'schema', js: 'schema', typ: u(undefined, r('Values')) },
    { json: 'type', js: 'type', typ: u(undefined, r('CountryPackageType')) },
  ], false),
  Response: o([
    { json: 'description', js: 'description', typ: u(undefined, '') },
    { json: 'headers', js: 'headers', typ: u(undefined, r('Values')) },
    { json: 'schema', js: 'schema', typ: u(undefined, r('Values')) },
  ], false),
  EntitiesClass: o([
    { json: 'get', js: 'get', typ: u(undefined, r('EntitiesGet')) },
  ], false),
  EntitiesGet: o([
    { json: 'tags', js: 'tags', typ: u(undefined, a('')) },
    { json: 'summary', js: 'summary', typ: u(undefined, '') },
    { json: 'operationId', js: 'operationId', typ: u(undefined, '') },
    { json: 'produces', js: 'produces', typ: u(undefined, a('')) },
    { json: 'responses', js: 'responses', typ: u(undefined, r('PurpleResponses')) },
  ], false),
  PurpleResponses: o([
    { json: '200', js: '200', typ: u(undefined, r('Response')) },
  ], false),
  ID: o([
    { json: 'get', js: 'get', typ: u(undefined, r('ParameterParameterIDGet')) },
  ], false),
  ParameterParameterIDGet: o([
    { json: 'tags', js: 'tags', typ: u(undefined, a('')) },
    { json: 'summary', js: 'summary', typ: u(undefined, '') },
    { json: 'operationId', js: 'operationId', typ: u(undefined, '') },
    { json: 'produces', js: 'produces', typ: u(undefined, a('')) },
    { json: 'parameters', js: 'parameters', typ: u(undefined, a(r('ParameterElement'))) },
    { json: 'responses', js: 'responses', typ: u(undefined, m(r('Response'))) },
  ], false),
  SpecClass: o([
    { json: 'get', js: 'get', typ: u(undefined, r('SpecGet')) },
  ], false),
  SpecGet: o([
    { json: 'summary', js: 'summary', typ: u(undefined, '') },
    { json: 'tags', js: 'tags', typ: u(undefined, a('')) },
    { json: 'operationId', js: 'operationId', typ: u(undefined, '') },
    { json: 'produces', js: 'produces', typ: u(undefined, a('')) },
    { json: 'responses', js: 'responses', typ: u(undefined, r('FluffyResponses')) },
  ], false),
  FluffyResponses: o([
    { json: '200', js: '200', typ: u(undefined, r('The200')) },
  ], false),
  The200: o([
    { json: 'description', js: 'description', typ: u(undefined, '') },
    { json: 'headers', js: 'headers', typ: u(undefined, r('Values')) },
  ], false),
  Tag: o([
    { json: 'name', js: 'name', typ: u(undefined, '') },
    { json: 'description', js: 'description', typ: u(undefined, '') },
    { json: 'externalDocs', js: 'externalDocs', typ: u(undefined, r('ExternalDocs')) },
  ], false),
  ExternalDocs: o([
    { json: 'description', js: 'description', typ: u(undefined, '') },
    { json: 'url', js: 'url', typ: u(undefined, '') },
  ], false),
  CountryPackageType: [
    'any',
    'boolean',
    'integer',
    'number',
    'object',
    'string',
  ],
  OthersType: [
    'array',
  ],
};
