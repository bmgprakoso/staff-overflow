import { Grid, GridItem } from "@/components/ui/grid";
import { withForm } from "@/forms";
import { formOpts } from "../data/shared-form";
import { useLocations } from "../api/get-locations";

export const DetailStep = withForm({
  ...formOpts,
  render: function Render({ form }) {
    return (
      <div>
        <Grid cols={2}>
          <GridItem>
            <form.AppField
              name="employment_type"
              children={(field) => (
                <field.SelectField
                  label="Employment Type"
                  placeholder="Select Employment Type"
                  options={["Full-time", "Part-time", "Contract", "Intern"]}
                />
              )}
            />
          </GridItem>

          <GridItem>
            <form.AppField
              name="office_location"
              children={(field) => (
                <field.AutocompleteField
                  label="Office Location"
                  useQuery={useLocations}
                  placeholder="Search locations..."
                />
              )}
            />
          </GridItem>

          <GridItem>
            <form.AppField
              name="notes"
              children={(field) => <field.TextareaField label="Notes" />}
            />
          </GridItem>
        </Grid>
      </div>
    );
  },
});
