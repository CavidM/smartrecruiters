import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartments } from '../../../store/actions/departmentActions';
import { setPostingFilter } from '../../../store/actions/postingActions';
import FilterSelectComponent from './FilterSelectComponent';

function FilterBar() {

    const dispatch = useDispatch();
    const departments = useSelector(state => state.departments);
    const postings = useSelector(state => state.postings);
    const filter = postings.filter;

    const change = (e) => {
        dispatch(setPostingFilter({
            filterField: e.target.name,
            filterValue: e.target.value
        }))
    }

    useEffect(() => {

        dispatch(getDepartments());

    }, []);

    let departmentsList = [];

    if (departments?.list?.content?.length) {

        departmentsList = departments.list.content.map(department => {

            return {
                value: department.id,
                key: department.id,
                label: department.label
            };
        })
    }

    return (
        <div>

            <FilterSelectComponent
                label="Country"
                value={filter.country}
                name="country"
                change={change}
                items={[
                    { value: 'pl', key: 'pl', label: 'Poland' },
                    { value: 'de', key: 'de', label: 'Berlin' }
                ]}
            />

            {
                departmentsList
                && <FilterSelectComponent
                    label="Department"
                    value={filter.department}
                    name="department"
                    change={change}
                    items={departmentsList}
                />
            }
        </div>
    );
}

export default FilterBar;