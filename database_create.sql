-- Drop table

-- DROP TABLE wedding.guests;

CREATE TABLE wedding.guests (
	id serial NOT NULL,
	"name" varchar NOT NULL,
	surname varchar NOT NULL,
	url_param_id varchar NOT NULL,
	attending bool NOT NULL DEFAULT false,
	attr jsonb NULL,
	rsvp_date timestamp(0) NULL,
	guest_comment text NULL,
	email varchar NULL,
	contact_number varchar NULL,
	CONSTRAINT guests_pk PRIMARY KEY (url_param_id)
);

--default nextval('wedding.guests_id_seq'::regclass)